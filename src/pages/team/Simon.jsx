import React from "react";

import {
  Grid,
} from '@mui/material/';


import simon from '../../public/assets/pages/about/simon01.jpg'

const Simon = () => {
  return(
    <div id="home">
      <div className="container">
        <hr/>
        <div className="spacing-64">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6} sx={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
            <h2>SIMONE LAZZAROTTI</h2>
            <h3>Founder & Main Architect</h3>
            <div className="spacing-96">&nbsp;</div>
            <p className="main-text">
              Simone Lazzarotti, Founder and Main Architect of Lazzarotti & Associati Architects, is the extrovert mind behind any single project published and followed by his studio. Italian by culture and education, his works have been featured in prominent national magazines and books including Architectural Digest, House Beautiful, Wall Street Journal, Forbes, Better Homes & Gardens, Raw Interiors, and Architecture Today.
            </p>
            <p className="main-text">
              Luxury lifestyle is the common link of anything connected to the studio and to him. 
            </p>
            <div className="spasing-64">&nbsp;</div>
            <a href="/about" className="main-button">Back to About</a>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={simon} className="f-work-main" />
            {/* <h4>SIMONE LAZZAROTTI</h4> */}
          </Grid>          
        </Grid>
      </div>
    </div>
  )
};

export default Simon;