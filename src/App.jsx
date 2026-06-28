import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Hub from "./pages/Hub";
import Properties from "./pages/Properties";
import EstateDetail from "./pages/EstateDetail";
import Stays from "./pages/Stays";
import PropertyDetail from "./pages/PropertyDetail";
import Cleaning from "./pages/Cleaning";
import Maintenance from "./pages/Maintenance";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <main className="min-h-screen bg-background overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Hub />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<EstateDetail />} />
          <Route path="/stays" element={<Stays />} />
          <Route path="/stays/:id" element={<PropertyDetail />} />
          <Route path="/cleaning" element={<Cleaning />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </BrowserRouter>
  );
}
