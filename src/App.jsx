import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ChunkErrorBoundary from "./components/ChunkErrorBoundary";
import Hub from "./pages/Hub";

// Hub is the landing page, so it stays in the main bundle. Every other page is
// split into its own chunk — otherwise a visitor to "/" downloads all ten pages.
//
// The loaders are held here as well as passed to lazy() so we can warm them
// ourselves once the page is idle. See usePrefetchRoutes below.
const load = {
  Properties: () => import("./pages/Properties"),
  EstateDetail: () => import("./pages/EstateDetail"),
  Stays: () => import("./pages/Stays"),
  PropertyDetail: () => import("./pages/PropertyDetail"),
  Cleaning: () => import("./pages/Cleaning"),
  Maintenance: () => import("./pages/Maintenance"),
  Moving: () => import("./pages/Moving"),
  About: () => import("./pages/About"),
  Contact: () => import("./pages/Contact"),
};

const Properties = lazy(load.Properties);
const EstateDetail = lazy(load.EstateDetail);
const Stays = lazy(load.Stays);
const PropertyDetail = lazy(load.PropertyDetail);
const Cleaning = lazy(load.Cleaning);
const Maintenance = lazy(load.Maintenance);
const Moving = lazy(load.Moving);
const About = lazy(load.About);
const Contact = lazy(load.Contact);

/**
 * Splitting the routes keeps the first load small, but it moves a network
 * round-trip onto every navigation — the visitor clicks and waits on a blank
 * screen while the chunk arrives. Fetching all of them once the browser is idle
 * gets both: a small initial download, and navigation that never touches the
 * network. Every chunk is a few KB gzipped, so the whole set is cheap.
 *
 * The imports are already resolved by the time a link is clicked, and the module
 * registry dedupes, so lazy() gets an instantly-settled promise.
 */
function usePrefetchRoutes() {
  useEffect(() => {
    const warm = () => Object.values(load).forEach((fn) => fn());
    if (window.requestIdleCallback) {
      const id = requestIdleCallback(warm, { timeout: 4000 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(warm, 1500);
    return () => clearTimeout(id);
  }, []);
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // html sets scroll-behavior: smooth, which makes window.scrollTo animate the
    // whole way back up on every route change. On a long page that is close to a
    // second of the old page sliding past before the new one appears, and it
    // reads as the click not having registered.
    //
    // Suppressed by toggling the property rather than passing behavior:"instant",
    // which throws a TypeError on browsers that don't know the keyword instead of
    // degrading. Anchor links keep their smooth scrolling.
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previous;
  }, [pathname]);
  return null;
}

// Holds the viewport height while a route chunk loads so the footer doesn't
// jump up and back down. Deliberately blank — a spinner that flashes for 80ms
// reads as jank, not progress. With prefetching this is rarely seen at all.
function RouteFallback() {
  return <div className="min-h-screen bg-background" />;
}

function PageRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="animate-page-enter">
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Hub />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<EstateDetail />} />
          <Route path="/stays" element={<Stays />} />
          <Route path="/stays/:id" element={<PropertyDetail />} />
          <Route path="/cleaning" element={<Cleaning />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/moving" element={<Moving />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default function App() {
  usePrefetchRoutes();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <main className="min-h-screen bg-background overflow-x-hidden">
        {/* Inside BrowserRouter so the fallback UI can still render the chrome,
            outside Suspense so it catches the chunk rejection itself. */}
        <ChunkErrorBoundary>
          <PageRoutes />
        </ChunkErrorBoundary>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
