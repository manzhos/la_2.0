import React from "react";

import {
  Button,
  Grid,
} from '@mui/material/';

import mainVideo from '../public/assets/pages/home/fullBtr-4.mp4';

import simon from '../public/assets/pages/about/simon.jpg'

const About = () => {
  return(
    <div id="home">
      <div className="container">
        <div style={{ height:'160px', width:'100%' }}></div>
        <div className="main-video" style={{ backgroundColor: 'gray' }}>
          <video style={{ width: '100%' }} autoplay="autoplay" controls loop="loop" playsinline="" muted="muted">
              <source src={mainVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="spacing-64">&nbsp;</div>

      <div className="container">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={12} sx={{ textAlign:"center" }}>
            <h2>WHO WE ARE</h2>
            <p className="main-text">
              Lazzarotti & Associati Architects is a 100% genuine Italian team of architects, interior designers, engineers and managers who grouped to serve Clients to create the best possible design solutions required for their individual projects.
            </p>
            <p className="main-text">
              With two main offices, one located in Italy, in the city of Milan, and the other located in Kiev now, the group is specialized in the realization of high level projects and can offer a variety of services to their Clients.
            </p>
            <p className="main-text">
              In our modern days our Studio is the result of a strong and successful cooperation of more than 30 years of experience on the international market, with a vast variety of projects successfully completed.
            </p>
            <p className="main-text">
              Our Studio experience spans from big-scale projects, like Hotels, Commercial Centers, Living Complexes, Residential villages — up to more common mid/small scale works: villas, cottages, restaurants, boutiques, apartments.
            </p>
            <div className="spacing-36">&nbsp;</div>
          </Grid>
        </Grid>

        <hr/>
        <div className="spacing-64">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <img src={simon} className="f-work-main" />
            {/* <h4>SIMONE LAZZAROTTI</h4> */}
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
            <h2>SIMONE LAZZAROTTI</h2>
            <h3>Founder & Main Architect</h3>
            <div className="spacing-96">&nbsp;</div>
            <p className="main-text">
              <a href="/team/simon" className="view-more">MEET SIMONE</a>
            </p>
          </Grid>
        </Grid>
        <div className="spacing-64">&nbsp;</div>
        <hr/>
        <div className="spacing-64">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={12} sx={{ textAlign:"center" }}>
            <h2>WHAT WE DO</h2>
          </Grid>
          <Grid item xs={3} sm={3}>
            <p className="main-text">
              CONSULTING 
            </p>
          </Grid>
          <Grid item xs={9} sm={9}>
            <p className="main-text">
              Our studio can help at the very beginning of the decisional process. Remember that the right choice is always made with the help of professionals that can see what the unexperienced eye cannot.
            </p>
          </Grid>
        </Grid>
        <div className="spacing-64">&nbsp;</div>
        <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>
    </div>
  )
};

export default About;