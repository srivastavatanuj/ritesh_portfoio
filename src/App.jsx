import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";
import SkillsPage from "./Pages/SkillsPage";
import Projects from "./Pages/Projects";
import Loader from "./Components/Loader/Loader";
import NotFound from "./Pages/NotFound";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";


const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AboutSection" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Skills" element={<SkillsPage />} />
        <Route path="/Project" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;