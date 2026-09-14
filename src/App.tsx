import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WhyUs from "./pages/WhyUs";
import BiomassPellet from "./pages/BiomassPellet";
import BiomassBriquette from "./pages/BiomassBriquette";
import Process from "./pages/Process";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="products/biomass-pellet" element={<BiomassPellet />} />
          <Route path="products/biomass-briquette" element={<BiomassBriquette />} />
          <Route path="process" element={<Process />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
