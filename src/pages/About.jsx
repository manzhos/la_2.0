import React, { useRef, useEffect, useState } from "react";

import { theme } from '../component/Theme';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  Grid,
} from '@mui/material/';

import mainVideo from '../public/assets/pages/home/fullBtr-4.mp4';

import simon from '../public/assets/pages/about/simon.jpg'

import aodh_01 from '../public/assets/pages/about/aodh_01.jpg'
import aodh_02 from '../public/assets/pages/about/aodh_02.jpg'
import aodh_03 from '../public/assets/pages/about/aodh_03.jpg'
import aodh_04 from '../public/assets/pages/about/aodh_04.jpg'

import ab_01 from '../public/assets/pages/about/ab_01.jpg'
import ab_02 from '../public/assets/pages/about/ab_02.jpg'

const About = () => {
  const aboutScedule = useRef(null)
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'))

  const [aboutSceduleLeft, setAboutSceduleLeft] = useState('0px')

  const calcAboutSceduleLeft = () => {
    const windowInnerWidth = window.innerWidth;
    const aboutSceduleWidth = aboutScedule.current.getBoundingClientRect().width;
    setAboutSceduleLeft('-' + (windowInnerWidth - aboutSceduleWidth) / 2 + 'px');
  }
  useEffect(()=>{calcAboutSceduleLeft()}, [])

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

          <Grid item xs={3} sm={3}>
            <p className="main-text">
              CONCEPT 
            </p>
          </Grid>
          <Grid item xs={9} sm={9}>
            <p className="main-text">
              Start working on project ideas beginning with the concept of professional and creative design.
            </p>
          </Grid>
          
          <Grid item xs={3} sm={3}>
            <p className="main-text">ARCHITECTURE</p>
          </Grid>
          <Grid item xs={9} sm={9}>
            <p className="main-text">
              We start designing the project, combining practical and aesthetic values.
            </p>
          </Grid>

          <Grid item xs={3} sm={3}>
            <p className="main-text">ENGINEERING</p>
          </Grid>
          <Grid item xs={9} sm={9}>
            <p className="main-text">
              Provide a full range of services on any subject of engineering in construction
            </p>
          </Grid>

          <Grid item xs={3} sm={3}>
            <p className="main-text">SITE DOCUMENTS</p>
          </Grid>
          <Grid item xs={9} sm={9}>
            <p className="main-text">
              Preparation of drawings and specifications for permits, tenders and construction
            </p>
          </Grid>

          <Grid item xs={3} sm={3}>
            <p className="main-text">INTERIOR</p>
          </Grid>
          <Grid item xs={9} sm={9}>
            <p className="main-text">
              We create the new space with innovative ideas and solutions.
            </p>
          </Grid>

          <Grid item xs={3} sm={3}>
            <p className="main-text">SUPPLY</p>
          </Grid>
          <Grid item xs={9} sm={9}>
            <p className="main-text">
              We follow the whole procurement process.
            </p>
          </Grid>

          <Grid item xs={3} sm={3}>
            <p className="main-text">FINISHING</p>
          </Grid>
          <Grid item xs={9} sm={9}>
            <p className="main-text">
              All specifications for finishing and finishing materials, complete analysis.
            </p>
          </Grid>

          <Grid item xs={3} sm={3}>
            <p className="main-text">MANAGEMENT</p>
          </Grid>
          <Grid item xs={9} sm={9}>
            <p className="main-text">
              We control with our team coordination of suppliers and installation.
            </p>
          </Grid>

          <Grid item xs={3} sm={3}>
            <p className="main-text">TURN-KEY-PROJECT</p>
          </Grid>
          <Grid item xs={9} sm={9}>
            <p className="main-text">
              We work on projects with full responsibility and control from start to finish.
            </p>
          </Grid>

          <Grid item xs={3} sm={3}>
            <p className="main-text">COORDINATION</p>
          </Grid>
          <Grid item xs={9} sm={9}>
            <p className="main-text">
              We provide full coordination of design and construction work.
            </p>
          </Grid>

          <Grid item xs={3} sm={3}>
            <p className="main-text">COMPLETION</p>
          </Grid>
          <Grid item xs={9} sm={9}>
            <p className="main-text">
              Final Drawings and Quality Guidelines.
            </p>
          </Grid>

        </Grid>

        <div className="spacing-64">&nbsp;</div>
        <hr/>
        <div className="spacing-64">&nbsp;</div>

        <Grid container spacing={{ xs:2, md:3}}>
          <Grid item xs={12} sm={12} sx={{ textAlign:"center" }}>
            <h2>WHY WORK WITH US</h2>
            <p className="main-text">
              We are a fully employed Italian design Studio bringing our culture and style in all the projects we follow.
            </p>
            <p className="main-text">
              The style and ideas that we apply to our projects come from both our background studies (University of Florence and Milan) as well as from the newest and latest Trends and Ideas coming from a city like Milan, heart of the Design Culture and always leading the world market in terms of Fashion and Design.
            </p>
            <p className="main-text">
              We always deal directly with Italian companies when we need to buy the materials necessary for our projects. 
            </p>
            <div className="spacing-36">&nbsp;</div>
          </Grid>
        </Grid>

        <div className="spacing-64">&nbsp;</div>
        <hr/>
        <div className="spacing-64">&nbsp;</div>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <h2>GROUNDED IN AUTHENTICITY,<br />ROOTED IN LUXURY</h2>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
            <p className="main-text">
              Using the highest level of customization, we dream. Then we fulfill dreams. The result: interiors that are elevated but approachable, rooms that are extraordinary interplays of form and function, and spaces that embrace a perfectly unfussy, unstyled feeling. 
            </p>
            <p className="main-text">
              We never simply put objects into a home; we craft a way of living in each intimate and every thoughtful moment.
            </p>
          </Grid>
        </Grid>

        <div className="spacing-64">&nbsp;</div>
        <hr/>
        <div className="spacing-64">&nbsp;</div>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={12}>
            <h2>ABOUT OUR DESIGN HOUSE</h2>
            <p className="main-text">
              Located in the heart of the metroplex, our workplace bore the weight of neglect as an abandoned firehouse. However, through ingenuity and creative prowess, we breathed new life into its weary frame, salvaging it from the clutches of time. Now an awe-inspiring sanctuary whose craftsmanship converges with beauty, the space serves as a hallowed ground where our team finds immeasurable inspiration and the story of your home begins to unfold.
            </p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid container>
              <Grid item xs={6} md={3} style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}><img src={aodh_01} /></Grid>
              <Grid item xs={6} md={3} style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}><img src={aodh_02} style={{ width:"90%" }} /></Grid>
              <Grid item xs={6} md={3} style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}><img src={aodh_03} /></Grid>
              <Grid item xs={6} md={3} style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}><img src={aodh_04} style={{ width:"90%" }} /></Grid>
            </Grid>
          </Grid>
        </Grid>

        <div className="spacing-64">&nbsp;</div>
        <hr/>
        <div className="spacing-64">&nbsp;</div>

        <div id="about_scedule" ref={aboutScedule} style={{ width:"100%", position:"relative", height: isMobileMode ? "1800px" : "600px" }}>
          <div style={{ position:"absolute", marginLeft:aboutSceduleLeft, width:"100vw", height: isMobileMode ? "1800px" : "600px", overflow:"hidden" }}>
            <Grid container spacing={{ xs: 2, md: 3 }} >
              <Grid item xs={12} md={4}><img src={ab_01} style={{ width:"100%"}} /></Grid>
              <Grid item xs={12} md={3}><img src={ab_02} style={{ width:"100%"}} /></Grid>
              <Grid item xs={12} md={5}>
                <div style={{ width:"100%", height:"100%", backgroundColor:"#E8E1D7", padding:"50px" }}>
                  <h2>SCHEDULE A<br />CONSULTATION</h2>
                  <p className="main-text">
                    View our design services and rates on our <a href="/services">Services</a> page.
                  </p>
                  <p className="main-text">
                    We would love to talk with you about your current needs,<br/>your complimentary <b>Discovery Call</b> is just one tap away.
                  </p>
                  <div className="spacing-36">&nbsp;</div>
                  <a href="https://calendly.com/d/cmfw-74d-bs5/lazzarotti-discovery-call" className="main-button" style={{ backgroundColor:"#050000" }}>SCHEDULE A CONSULTATION</a>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="spacing-64">&nbsp;</div>
        <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>
    </div>
  )
};

export default About;