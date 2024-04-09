import React from "react";
import { theme } from '../component/Theme';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  Grid,
} from '@mui/material/';

import mainVideo from '../public/assets/pages/home/fullBtr-4.mp4';

// content images
import pic01 from '../public/assets/pages/home/pic01.png'
import featureWork01 from '../public/assets/feature_works/fw01.jpg'
import featureWork02 from '../public/assets/feature_works/fw02.jpg'
import featureWork03 from '../public/assets/feature_works/fw03.jpg'

import gr01 from '../public/assets/glowing_remarks/gr01.jpg'
import gr02 from '../public/assets/glowing_remarks/gr02.jpg'
import gr03 from '../public/assets/glowing_remarks/gr03.jpg'

import sl from '../public/assets/pages/home/sl.jpg'

import inspire  from '../public/assets/pages/home/Get+Inspired.jpeg'
import mag01    from '../public/assets/pages/home/mag01.jpg'

// awards
import ad           from '../public/assets/awards/AD+DIRECTORY.jpeg'
import best2023     from '../public/assets/awards/D-Home-Best-2023-logo2.jpg'
import best2024     from '../public/assets/awards/D_Home_Best_2024.jpg'
import luxe         from '../public/assets/awards/luxe.jpg'
import designerYear from '../public/assets/awards/HGTV-Designer-of-the-Year-2021-social-badge-overall-winner.jpg'
import euPropAwards from '../public/assets/awards/euPropAwards.png'
import arts         from '../public/assets/awards/ARTS32_H_Finalist_CMYK_BLK.jpg'
import da           from '../public/assets/awards/PaperCity_2021Award.jpg'
import ritz         from '../public/assets/awards/ritz-carlton-leadership-training.png'
import parkInn      from '../public/assets/awards/parkInn.png'
import carlson      from '../public/assets/awards/carlson.png'
import leadHotels   from '../public/assets/awards/leadingHotels.png'

const Home = () => {
  
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

  return(
    <div id="home">
      {/* {!isMobileMode && */}
        <div className="container">
          <div style={{ height:'160px', width:'100%' }}></div>
          <div className="main-video" style={{ backgroundColor: 'gray' }}>
            <video style={{ width: '100%' }} autoplay="autoplay" controls loop="loop" playsinline="" muted="muted">
                <source src={mainVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      {/* } */}
      <div className="spacing-36">&nbsp;</div>
      <div className="container">
        <h5>
          ALWAYS CHASING THE UNCOMMON - CREATING UNIQUE INTERIORS THAT ARE DEEPLY STUDIED, CURATED AND FOREVER REMEMBERED. ROOTED IN ITALIAN AUTHENTICITY, GROUNDED IN LUXURY, A DEPARTURE FROM THE ORDINARY
        </h5>
      </div>

      <div className="spacing-64">&nbsp;</div>
      <div className="container">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
              <img 
                style={{ 
                  // position:"absolute", 
                  // left:"0", 
                  width:"100%", 
                }} 
              src={pic01} />
          </Grid>
          <Grid item xs={12} sm={6} style={ !isMobileMode ? {paddingLeft:"40px"} : {} } >
            <h2>OUR SERVICES</h2>
            <p className="main-text">
              Our Studio has a deeply design-forward ethos that compels us to create interiors that are elevated, curated, and storied. 
            </p>
            <p className="main-text">
              Rooted in Genuine Italian authenticity, grounded in luxury, always a departure from the ordinary. We dive in every detail so you don't have to, and we believe that extraordinary design allows you to live in a home that will feed your soul and well-being. We re-invent the usual terms of interior design works, focusing on intimate, thoughtful details. We are not simply putting objects into a home but rather crafting a way of living that is unpretentious. Through every decision, a spirit of excellence is woven into the story of your home. We believe that if our projects are going to be places of reprieve, rejuvenation, and inspiration, they also have to be places of beauty.
            </p>
            <p className="main-text">
              <i>
                Whether you’re building your dream home or vacation retreat, renovating your existing home, or simply updating, the first step can be scheduling a complimentary <a href="#" style={{ color:"#464643" }}>DISCOVERY CALL</a>. Delight in a personalized experience, and let us help you create your own haven of comfort and laid-back sophistication.
              </i>
            </p>
            <div className="spacing-36">&nbsp;</div>
            <a href="/services" className="main-button">Learn More</a>
          </Grid>
        </Grid>
      </div>

      <div className="spacing-96">&nbsp;</div>
      <div className="container">
        <h2 style={{ textAlign:"center" }}>FEATURED WORK</h2>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={4}>
            <a href="/portfolio/miami_ph" >
              <img src={featureWork01} className="f-work-main"/>
            </a>
            <a href="/portfolio/miami_ph" className="fw-link">Coral Gables Miami Penthouse</a>
          </Grid>
          <Grid item xs={12} sm={4}>
            <a href="/portfolio/luxury_villa" >
              <img src={featureWork02} className="f-work-main"/>
            </a>
            <a href="/portfolio/luxury_villa" className="fw-link">Luxury Modern Villa</a>
          </Grid>
          <Grid item xs={12} sm={4}>
            <a href="/portfolio/kadima_resort" >
              <img src={featureWork03} className="f-work-main"/>
            </a>
            <a href="/portfolio/kadima_resort" className="fw-link">Kadima Lakeview Resort</a>
          </Grid>
        </Grid>
      </div>
      <div className="spacing-64">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="#" className="main-button">VIEW OUR PORTFOLIO</a>
      </div>
      <div className="spacing-48">&nbsp;</div>

      <div className="container">
        <hr style={{ color:"#464643", backgroundColor: "#464643" }}/>
        <div className="spacing-64">&nbsp;</div>
        <h2 style={{ textAlign:"center" }}>GLOWING REMARKS</h2>
        <div className="spacing-24">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <img src={gr01} className="f-work-main" />
            <h4>RIVIERA CONTEMPORARY LUXURY VILLA</h4>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>Konstantin Gumeniok</h2>
            <p className="main-text">
              We could not be happier with our experience with design studio Lazzarotti & Associati. Simone and his team were able to transform our house into a beautiful home that is warm, inviting, comfortable, and stunningly beautiful! When we first purchased the land, we knew it had great potential and vision in our minds, but had no idea where to start. From our first meeting with Simone, we knew we had selected the right team to work with. They were able to translate our ideas and inspiration images into a home that is above and beyond what we had thought possible.
            </p>
            <a href="/portfolio/rv_87" className="view-more">View more</a>
          </Grid>
        </Grid>

        <div className="spacing-64">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <img src={gr02} className="f-work-main" />
            <h4>Luxury modern Penthouse</h4>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>MAURICE BEAUMOND</h2>
            <p className="main-text">
              I had a great experience working with Simon and the rest of the  Design team to furnish my entire new Penthouse. This was a BIG job and they handled every detail beautifully. I spoke with them about my vision for the style and they took the reins from there. They did an excellent job of giving me just the right amount of options, so I did not get hindered by too many choices. I thought they were very straightforward about their fees and were respectful of our established budget. They handled all of the logistics which made the whole process stress-free for me. The best part was the big reveal! I would most definitely recommend Lazzarotti & Associati Architects and would love to work with them again in my future projects!
            </p>
            <a href="/portfolio/tt_307" className="view-more">View more</a>
          </Grid>
        </Grid>

        <div className="spacing-64">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <img src={gr03} className="f-work-main" />
            <h4>THE AMBASSY WIEN GLAMOUR PENTHOUSE</h4>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>ALEKSANDRA TERESENKO</h2>
            <p className="main-text">
              All I can say is WOW. The Lazzarotti Associati design team is truly magical. There are just no other words. I hired them for their full-service design work to help me furnish my entire Penthouse. We moved from Miami to Vienna and needed all new furniture as well as paint, wallpaper, draperies, and lighting. The result was truly fantastic and the process was extremely professional! Working with these people made me feel special and they really understood my style and paid very close attention to how I wanted to use each room and what was important to me. Everyone who has seen my property since has been truly impressed. And the biggest compliment I received was "it feels like a home like a happy family lives here". Simone and the team chose pieces that are truly timeless and really appreciate the character of my new contemporary/clean design aesthetic. Not only is everything beautiful, the rooms are functional and are conducive to everyday living and you know the furniture will last. The team thought about every single detail from big chandeliers to little plants and decor on the shelves and we absolutely love our new home. I can't wait to hire them again when we do our next renovation project. Truly spectacular from start to finish - can't say enough good things. Hire them NOW!
            </p>
            <a href="/portfolio/amb_vie" className="view-more">View more</a>
          </Grid>
        </Grid>
      </div>
      <div className="spacing-48">&nbsp;</div>

      <div className="container">
        <hr style={{ color:"#464643", backgroundColor: "#464643" }}/>
        <div className="spacing-64">&nbsp;</div>
        <h2 style={{ textAlign:"center" }}>OUR Studio</h2>
        <div className="spacing-24">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <img src={sl} className="f-work-main" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>LAZZAROTTI & ASSOCIATI ARCHITECTS</h2>
            <p className="main-text">
              We believe that your home should be an experience that takes you away with its moments, objects, and design. Our Design Forward luxury goes beyond the trends of today and instead creates homes that are intentional and built to last forever.
            </p>
            <p className="main-text">
              Our approach to design is rooted around complex solutions and elevated by extraordinary beauty. We curate projects that embody understated elegance and grand intimacy, creating a harmonious tension between objects. We carefully balance editing and curating to achieve that perfectly fitting look, taking the road less traveled to create spaces that are elevated to their highest standards.
            </p>
            <div className="spacing-36">&nbsp;</div>
            <a href="/about" className="main-button">About Us</a>
          </Grid>
        </Grid>
      </div>

      <div className="spacing-64">&nbsp;</div>
      <div style={{ width:"100%", backgroundColor:"#f4f2ed" }}>
        <div className="spacing-64">&nbsp;</div>
        <div className="container">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={3}>
              <div style={ !isMobileMode ? { width:"170%", paddingTop:"140px" } : {width:"100%"} } >
                <h2>SPACES<br/>INSPIRED BY WHAT MATTERS MOST</h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={2}> <img src={inspire} style={ !isMobileMode ? {width:"130%"} : {width:"100%"} } /> </Grid>
            <Grid item xs={12} sm={2}> <img src={mag01}   style={ !isMobileMode ? { width:"120%", paddingTop: "70px", marginLeft:"-20%" } : {width:"100%"} } /> </Grid>
            <Grid item xs={12} sm={5}>
              <p className="main-text">
                Walk through the door and begin the personal journey of creating a sanctuary that reflects who you are—that unique combination of who God made you to be and ho you shape life by what matters most.
              </p>
              <p className="main-text">
                Award-winning designer Simone Lazzarotti uses his personal experience to inspire your every step with this truth: You are worthy of beauty. Dream of it. Plan for it. And watch it emerge as you create visual moments, let in color and light, select meaningful treasures, and allow the smallest details to shine. 
              </p>
              <p className="main-text">
                This is the home made for you.
              </p>
              <p className="main-text">
                This is beauty by design. Download now our DESIGN MAGAZINE to take a glimpse of the world that lies behind the curtains of our STUDIO.
              </p>
              <p className="main-text">
                <a href="https://drive.google.com/file/d/1FroQxWwcrE2mvNX37FSVZpEk7r-FWL2P/view?usp=sharing" style={{ color:"#464643" }}>DOWNLOAD NOW</a>
              </p>
            </Grid>
          </Grid>
        </div>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <div className="spacing-64">&nbsp;</div>
      <div className="container"style={{ textAlign:"center" }}>
        <h6 style={{ marginBottom: "15px" }}>LET’S CREATE TOGETHER</h6>
        <h2 style={{ marginBottom: "15px" }}>THE FIRST STEP STARTS HERE</h2>
        <h3>HERE’S TO YOUR WAY OF LIVING.</h3>
        <div className="spacing-48">&nbsp;</div>
        <a href="#" className="main-button">SCHEDULE YOUR CONSULTATION</a>
      </div>

      <div className="spacing-96">&nbsp;</div>
      <div className="container"style={{ textAlign:"center" }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={3} sm={1}> <img src={ad}           className="f-work-main" /> </Grid>
          <Grid item xs={3} sm={1}> <img src={best2023}     className="f-work-main" /> </Grid>
          <Grid item xs={3} sm={1}> <img src={best2024}     className="f-work-main" /> </Grid>
          <Grid item xs={3} sm={1}> <img src={luxe}         className="f-work-main" /> </Grid>
          <Grid item xs={3} sm={1}> <img src={designerYear} className="f-work-main" /> </Grid>
          <Grid item xs={3} sm={1}> <img src={euPropAwards} className="f-work-main" /> </Grid>
          <Grid item xs={3} sm={1}> <img src={arts}         className="f-work-main" /> </Grid>
          <Grid item xs={3} sm={1}> <img src={da}           className="f-work-main" /> </Grid>
          <Grid item xs={3} sm={1}> <img src={ritz}         className="f-work-main" /> </Grid>
          <Grid item xs={3} sm={1}> <img src={parkInn}      className="f-work-main" /> </Grid>
          <Grid item xs={3} sm={1}> <img src={carlson}      className="f-work-main" /> </Grid>
          <Grid item xs={3} sm={1}> <img src={leadHotels}   className="f-work-main" /> </Grid>
        </Grid>
      </div>

    </div>
  )
};

export default Home;