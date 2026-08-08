import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hub from "./pages/Hub";

// Hub is the landing page, so it stays in the main bundle. Every other page is
// split into its own chunk — otherwise a visitor to "/" downloads all ten pages.
const Properties = lazy(() => import("./pages/Properties"));
const EstateDetail = lazy(() => import("./pages/EstateDetail"));
const Stays = lazy(() => import("./pages/Stays"));
const PropertyDetail = lazy(() => import("./pages/PropertyDetail"));
const Cleaning = lazy(() => import("./pages/Cleaning"));
const Maintenance = lazy(() => import("./pages/Maintenance"));
const Moving = lazy(() => import("./pages/Moving"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

// Holds the viewport height while a route chunk loads so the footer doesn't
// jump up and back down. Deliberately blank — a spinner that flashes for 80ms
// reads as jank, not progress.
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
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <main className="min-h-screen bg-background overflow-x-hidden">
        <PageRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
