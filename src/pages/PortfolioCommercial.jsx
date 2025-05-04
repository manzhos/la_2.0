import React from "react";

import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '../component/Theme';

import {
  Box,
} from '@mui/material/';


import parkinn_donetsk from '../public/assets/portfolio/parkinn_donetsk.jpg'
import cult_luxury from '../public/assets/portfolio/cult_luxury.jpg'
import cult_tsum from '../public/assets/portfolio/cult_tsum.jpg'
import parkinn_kiev from '../public/assets/portfolio/parkinn_kiev.jpg'
import scm from '../public/assets/portfolio/scm.jpg'
import donbass_arena from '../public/assets/portfolio/donbass_arena.jpg'
import ukrinvest from '../public/assets/portfolio/ukrinvest.jpg'
import stolichni from '../public/assets/portfolio/stolichni.jpg'
import bayan_palace from '../public/assets/portfolio/bayan_palace.jpg'
import donbass_palace from '../public/assets/portfolio/donbass_palace.jpg'
import bhr_main from '../public/assets/portfolio/barc_hotel_room/bhr_main.jpg'

const PortfolioCommercial = () => {
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-64">&nbsp;</div>
      <div style={{ textAlign: isMobileMode ? "center" : "right" }}><a href="/portfolio"><h3>BACK TO FULL PORTFOLIO</h3></a></div>
      <h2 style={{ textAlign:"center" }}>COMMERCIAL</h2>

      <div className="spacing-64">&nbsp;</div>

      <img src={bhr_main} style={{ width:"100%" }} alt="BARCELONA HOTEL TYPICAL ROOM" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/bhr" className="portfolio-link"><h2 className="portfolio-link">BARCELONA HOTEL TYPICAL ROOM</h2></a>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={donbass_palace} style={{ width:"100%" }} alt="DONBASS PALACE" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/donbass_palace" className="portfolio-link"><h2 className="portfolio-link">DONBASS PALACE</h2></a>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={cult_luxury} style={{ width:"100%" }} alt="CULT luxury" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/cult_luxury" className="portfolio-link"><h2 className="portfolio-link">CULT luxury</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>


      <img src={cult_tsum} style={{ width:"100%" }} alt="Cult Tsum" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/cult_tsum" className="portfolio-link"><h2 className="portfolio-link">Cult Tsum</h2></a>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={parkinn_kiev} style={{ width:"100%" }} alt="Park Inn — Kiev" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/parkinn_kiev" className="portfolio-link"><h2 className="portfolio-link">Park Inn — Kiev</h2></a>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={parkinn_donetsk} style={{ width:"100%" }} alt="PARK INN DONETSK" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/parkinn_donetsk" className="portfolio-link"><h2 className="portfolio-link">PARK INN — DONETSK</h2></a>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={scm} style={{ width:"100%" }} alt="SCM" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/scm" className="portfolio-link"><h2 className="portfolio-link">SCM</h2></a>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={donbass_arena} style={{ width:"100%" }} alt="Donbass Arena" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/donbass_arena" className="portfolio-link"><h2 className="portfolio-link">Donbass Arena</h2></a>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={ukrinvest} style={{ width:"100%" }} alt="Ukrinvest" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/ukrinvest" className="portfolio-link"><h2 className="portfolio-link">Ukrinvest</h2></a>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={stolichni} style={{ width:"100%" }} alt="Stolichni" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/stolichni" className="portfolio-link"><h2 className="portfolio-link">Stolichni</h2></a>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={bayan_palace} style={{ width:"100%" }} alt="Bayan Palace" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/bayan_palace" className="portfolio-link"><h2 className="portfolio-link">Bayan Palace</h2></a>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

    </Box>      
  )
};

export default PortfolioCommercial;