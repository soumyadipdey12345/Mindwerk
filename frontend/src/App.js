import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TechSections from './components/TechSections';
import Expertise from './components/Expertise';
import Services from './components/Services';
import Industries from './components/Industries';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import DigitalTransformation from './pages/services/DigitalTransformation';
import AIRPAImplementation from './pages/services/AIRPAImplementation';
import CloudStrategy from './pages/services/CloudStrategy';
import ProcessAutomation from './pages/services/ProcessAutomation';
import Enterprise from './pages/industries/Enterprise';
import Manufacturing from './pages/industries/Manufacturing';
import Healthcare from './pages/industries/Healthcare';
import FinancialServices from './pages/industries/FinancialServices';
import Retail from './pages/industries/Retail';
import Education from './pages/industries/Education';

function HomePage() {
  return (
    <>
      <Navbar />
      <TechSections />
      <Expertise />
      <Services />
      <Industries />
      <Features />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename="/Mindwerk">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Service Routes */}
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/ai-rpa" element={<AIRPAImplementation />} />
          <Route path="/services/cloud-strategy" element={<CloudStrategy />} />
          <Route path="/services/process-automation" element={<ProcessAutomation />} />
          
          {/* Industry Routes */}
          <Route path="/industries/enterprise" element={<Enterprise />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/financial-services" element={<FinancialServices />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/education" element={<Education />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;