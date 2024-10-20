import React, { useRef } from "react";

import {
  Grid,
} from '@mui/material/';

const Contacts = () => {
  const aboutScedule = useRef(null)

  return(
    <div id="contacts">
      <div className="container">
        <div style={{ height:'160px', width:'100%' }}>&nbsp;</div>
      </div>
      <div className="spacing-64">&nbsp;</div>
      <div className="container">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={12} sx={{ textAlign:"center" }}>
            <h2>Ready to start a new project.</h2>
            <p className="main-text">
              All you have to do is contact us in any convenient way and your project will begin to be implemented.
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={4} sx={{ textAlign:"center" }}>
            <h6>PHONE</h6>
            <p className="main-text">+39 389 603 06 34</p>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign:"center" }}>
            <h6>EMAIL</h6>
            <a href="mailto:info@lazzarottiassociati.com" className="main-text" >info@lazzarottiassociati.com</a>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign:"center" }}>
            <h6>MESSENGERS</h6>
            <p className="main-text">+39 389 603 06 34</p>
          </Grid>
        </Grid>

        <div className="spacing-64">&nbsp;</div>
        <hr/>
        <div className="spacing-64">&nbsp;</div>

        <div id="about_scedule" ref={aboutScedule}>
          <Grid container spacing={{ xs: 2, md: 3 }} >
            <Grid item xs={12} md={12}>
              <div style={{ backgroundColor:"#E8E1D7", padding:"50px" }}>
                <h2>SCHEDULE A CONSULTATION</h2>
                <p className="main-text">
                  View our design services and rates on our <a href="/services">Services</a> page.
                </p>
                <p className="main-text">
                  We would love to talk with you about your current needs, your complimentary <b>Discovery Call</b> is just one tap away.
                </p>
                <div className="spacing-36">&nbsp;</div>
                <a href="https://calendly.com/d/cmfw-74d-bs5/lazzarotti-discovery-call" className="main-button" style={{ backgroundColor:"#050000" }}>SCHEDULE A CONSULTATION</a>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
};

export default Contacts;