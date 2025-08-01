// src/App.tsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Ecosystem from "./components/Ecosystem";
import Stakeholders from "./components/Stakeholders"
import About from "./components/About";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resources from "./components/Resources";
import Repurposers from "./components/Repurposers";
import Holder from "./components/Holder";
import Issuer from "./components/Issuer";

import CellChemistryProviders from "./components/CellChemistryProviders";
import BatteryManufacturers from "./components/BatteryManufacturers";
import AutomobileOems from "./components/AutomobileOems";
import BatteryRepurposers from "./components/BatteryRepurposers";
import BatteryRecyclers from "./components/BatteryRecyclers";

import "./index.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
        <Header />
        <ScrollToTop /> {/* Add ScrollToTop component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/stakeholders" element={<Stakeholders />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/issuer" element={<Issuer />} />
          <Route path="/holder" element={<Holder />} />
          <Route path="/repurposers" element={<Repurposers />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cell-chemistry-providers"
            element={<CellChemistryProviders />}
          />
          <Route
            path="/battery-manufacturers"
            element={<BatteryManufacturers />}
          />
          <Route path="/automobile-oems" element={<AutomobileOems />} />
          <Route path="/battery-repurposers" element={<BatteryRepurposers />} />
          <Route path="/battery-recyclers" element={<BatteryRecyclers />} />
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
