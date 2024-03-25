import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'

import MiamiPH from './pages/portfolio/MiamiPH';
import LuxuryVilla from './pages/portfolio/LuxuryVilla';
import KadimaResort from './pages/portfolio/KadimaResort'
import KadimaResortInterior from './pages/portfolio/KadimaResortInterior'

export const laRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />

      <Route path="/portfolio/miami_ph" element={<MiamiPH />} />
      <Route path="/portfolio/luxury_villa" element={<LuxuryVilla />} />
      <Route path="/portfolio/kadima_resort" element={<KadimaResort />} />
      <Route path="/portfolio/kadima_resort/interior" element={<KadimaResortInterior />} />
    </Routes>
  )  
}