import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import PortfolioResidential from './pages/PortfolioResidential'
import PortfolioCommercial from './pages/PortfolioCommercial';
import FAQ from './pages/FAQ'
import Press from './pages/Press'

import MiamiPH from './pages/portfolio/MiamiPH'
import LuxuryVilla from './pages/portfolio/LuxuryVilla'
import KadimaResort from './pages/portfolio/KadimaResort'
import KadimaResortInterior from './pages/portfolio/KadimaResortInterior'
import RV_87 from './pages/portfolio/RV_87';
import TT_307 from './pages/portfolio/TT_307';
import TT_216 from './pages/portfolio/TT_216';
import TT_161 from './pages/portfolio/TT_161';
import AMB_VIE from './pages/portfolio/AMB_VIE';
import CLM from './pages/portfolio/CLM'
import Linden from './pages/portfolio/Linden';
import Edeldorf_1d from './pages/portfolio/Edeldorf_1d';
import Edeldorf_1da from './pages/portfolio/Edeldorf_1da';
import Edeldorf_2a from './pages/portfolio/Edeldorf_2a';
import Busov from './pages/portfolio/Busov';
import VillaLUX from './pages/portfolio/VillaLUX';
import DonbassPalace from './pages/portfolio/DonbassPalace';
import ParkInnDonetsk from './pages/portfolio/ParkInnDonetsk';
import CultLuxury from './pages/portfolio/CultLuxury';
import ModernPenthouse from './pages/portfolio/ModernPenthouse';
import CultTsum from './pages/portfolio/CultTsum';
import ParkInnKiev from './pages/portfolio/ParkInnKiev';
import VillaInPineta from './pages/portfolio/VillaInPineta';
import LipinkaHouse from './pages/portfolio/LipinkaHouse';
import Lipinka from './pages/portfolio/Lipinka';
import SCM from './pages/portfolio/SCM';
import DonbassArena from './pages/portfolio/DonbassArena';
import Ukrinvest from './pages/portfolio/Ukrinvest';
import Stolichni from './pages/portfolio/Stolichni';
import BayanPalace from './pages/portfolio/BayanPalace';

import Simon from './pages/team/Simon';

export const laRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/residential" element={<PortfolioResidential />} />
      <Route path="/portfolio/commercial" element={<PortfolioCommercial />} />
      <Route path="/press" element={<Press />} />
      <Route path="/faq" element={<FAQ />} />

      <Route path="/portfolio/miami_ph" element={<MiamiPH />} />
      <Route path="/portfolio/luxury_villa" element={<LuxuryVilla />} />
      <Route path="/portfolio/kadima_resort" element={<KadimaResort />} />
      <Route path="/portfolio/kadima_resort/interior" element={<KadimaResortInterior />} />
      <Route path="/portfolio/rv_87" element={<RV_87 />} />
      <Route path="/portfolio/tt_307" element={<TT_307 />} />
      <Route path="/portfolio/tt_216" element={<TT_216 />} />
      <Route path="/portfolio/tt_161" element={<TT_161 />} />
      <Route path="/portfolio/amb_vie" element={<AMB_VIE />} />
      <Route path="/portfolio/clm" element={<CLM />} />
      <Route path="/portfolio/linden" element={<Linden />} />
      <Route path="/portfolio/edeldorf1d" element={<Edeldorf_1d />} />
      <Route path="/portfolio/edeldorf1da" element={<Edeldorf_1da />} />
      <Route path="/portfolio/edeldorf2a" element={<Edeldorf_2a />} />
      <Route path="/portfolio/busov" element={<Busov />} />
      <Route path="/portfolio/villalux" element={<VillaLUX />} />
      <Route path="/portfolio/donbass_palace" element={<DonbassPalace />} />
      <Route path="/portfolio/parkinn_donetsk" element={<ParkInnDonetsk />} />
      <Route path="/portfolio/cult_luxury" element={<CultLuxury />} />
      <Route path="/portfolio/modern_penthouse" element={<ModernPenthouse />} />
      <Route path="/portfolio/cult_tsum" element={<CultTsum />} />
      <Route path="/portfolio/parkinn_kiev" element={<ParkInnKiev />} />
      <Route path="/portfolio/villainpineta" element={<VillaInPineta />} />
      <Route path="/portfolio/lipinka_house" element={<LipinkaHouse />} />
      <Route path="/portfolio/lipinka" element={<Lipinka />} />
      <Route path="/portfolio/scm" element={<SCM />} />
      <Route path="/portfolio/donbass_arena" element={<DonbassArena />} />
      <Route path="/portfolio/ukrinvest" element={<Ukrinvest />} />
      <Route path="/portfolio/stolichni" element={<Stolichni />} />
      <Route path="/portfolio/bayan_palace" element={<BayanPalace />} />

      <Route path="/team/simon" element={<Simon />} />
    </Routes>
  )  
}