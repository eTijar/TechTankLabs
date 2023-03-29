import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"

import "./Styles/styles.css";
// import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Index from "./pages/Index";
import Works from "./pages/Works";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>

          <Route exact path="/" element={
          // <React.Suspense fallback={<>...</>}>
          <Index />
        // </React.Suspense>
      } />

          <Route exact path="/works" element={
          // <React.Suspense fallback={<>...</>}>
            <Works />
          // </React.Suspense>
        } />

          <Route exact path="/contact-us" element={
          // <React.Suspense fallback={<>...</>}>
          <ContactUs />
        // </React.Suspense>
      } />

          <Route exact path="/about-us" element={
          // <React.Suspense fallback={<>...</>}>
          <AboutUs />
          // </React.Suspense>
        } />

          <Route path="*" element={<Index />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
