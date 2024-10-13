import React, { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import {
  Grid,
} from '@mui/material/';

import serv_01 from '../public/assets/pages/services/serv_01.jpg'
import serv_02 from '../public/assets/pages/services/serv_02.jpg'
import serv_03 from '../public/assets/pages/services/serv_03.jpg'

import serv_101 from '../public/assets/pages/services/serv_101.jpg'
import serv_102 from '../public/assets/pages/services/serv_102.jpg'
import serv_103 from '../public/assets/pages/services/serv_103.jpg'
import serv_104 from '../public/assets/pages/services/serv_104.jpg'

const Services = () => {
  const [currentTestimonial, setCurrentTestimonal] = useState(0)

  const testimonials = [
    {
      "name":"KOSTANTIN GUMENIOK",
      "text":"We could not be happier with our experience with design studio Lazzarotti & Associati. Simone and his team were able to transform our house into a beautiful home that is warm, inviting, comfortable, and stunningly beautiful! When we first purchased the land, we knew it had great potential and vision in our minds, but had no idea where to start. From our first meeting with Simone, we knew we had selected the right team to work with. They were able to translate our ideas and inspiration images into a home that is above and beyond what we had thought possible.",
      "link":"/portfolio/rv_87",
      "show":"block"
    },
    {
      "name":"MAURICE BEAUMOND",
      "text":"I had a great experience working with Simon and the rest of the  Design team to furnish my entire new Penthouse. This was a BIG job and they handled every detail beautifully. I spoke with them about my vision for the style and they took the reins from there. They did an excellent job of giving me just the right amount of options, so I did not get hindered by too many choices. I thought they were very straightforward about their fees and were respectful of our established budget. They handled all of the logistics which made the whole process stress-free for me. The best part was the big reveal! I would most definitely recommend Lazzarotti & Associati Architects and would love to work with them again in my future projects!",
      "link":"/portfolio/tt_307",
      "show":"none"
    },
    {
      "name":"ALEKSANDRA TERESENKO",
      "text":"All I can say is WOW. The Lazzarotti Associati design team is truly magical. There are just no other words. I hired them for their full-service design work to help me furnish my entire Penthouse. We moved from Miami to Vienna and needed all new furniture as well as paint, wallpaper, draperies, and lighting. The result was truly fantastic and the process was extremely professional! Working with these people made me feel special and they really understood my style and paid very close attention to how I wanted to use each room and what was important to me. Everyone who has seen my property since has been truly impressed. And the biggest compliment I received was \"it feels like a home like a happy family lives here\". Simone and the team chose pieces that are truly timeless and really appreciate the character of my new contemporary/clean design aesthetic. Not only is everything beautiful, the rooms are functional and are conducive to everyday living and you know the furniture will last. The team thought about every single detail from big chandeliers to little plants and decor on the shelves and we absolutely love our new home. I can't wait to hire them again when we do our next renovation project. Truly spectacular from start to finish - can't say enough good things. Hire them NOW!",
      "link":"/portfolio/amb_vie",
      "show":"none"
    },
  ]

  const next = () => {
    let nextEl;
    if( currentTestimonial < testimonials.length-1 ) nextEl = currentTestimonial + 1;
    else nextEl = 0;

    setCurrentTestimonal(nextEl);
  }

  const prev = () => {
    let nextEl;
    if( currentTestimonial > 0 ) nextEl = currentTestimonial - 1;
    else nextEl = testimonials.length-1;

    setCurrentTestimonal(nextEl);
  }

  return(
    <>
      <div className="container">
        <div className="spacing-128">&nbsp;</div>
        <div className="spacing-64">&nbsp;</div>
        <hr/>
        <div className="spacing-48">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>

          <Grid item xs={12} sm={6}>
            <h2>PROPERTY CONSULTING</h2>
            <h3>CONSULTING WITH PROFESSIONALS BEFORE ANY DECISION ABOUT YOUR PROPERTY IS THE BEST CHOICE YOU WILL EVER MAKE!</h3>
            <ul className="main-text" style={{ paddingRight:"3%" }}>
              <li style={{ marginTop:"14px" }}>Get our recommendations about the property location and overall infrastructure.</li>
              <li style={{ marginTop:"14px" }}>Receive our honest opinion about the overall property PLAN and our thoughts.</li>
              <li style={{ marginTop:"14px" }}>Make together a DISCOVERY walk-around in case the property is already existing.</li>
              <li style={{ marginTop:"14px" }}>Feedback about the Engineering works present (or not) and other basic equipment.</li>
              <li style={{ marginTop:"14px" }}>Get a professional REPORT about the feasibility of the investment.</li>
              <li style={{ marginTop:"14px" }}>Receive proposals of what we believe should FIT your needs once we understand your ideas.</li>
              <li style={{ marginTop:"14px" }}>Estimate the overall budget cost.</li>
            </ul>
            <p className="main-text">
              The decision to consult and be guided by professionals is a critical decision that each Client should know and understand as fast as possible.
            </p>
            <p className="main-text">
              We have received during our years of work so many complaints and so many bad comments from Clients that decided to start working with our Studio only after the decision was already made and therefore not possible to be reverted.
            </p>
            <p className="main-text">
              We are the best professionals you will ever find related to our sector of expertise, therefore we will always give our Clients our honest opinion and unbiased review of any kind of investment to be made: whether it will be the purchase of a new apartment, or the decision to buy a land outside of the city center in order to build the house of your dreams, or even to make an investment in the real estate market – believe us – the right people you need to be guided through this difficult process are the right professionals.
            </p>
            <p className="main-text">
              If you have any doubts or questions, please feel free to organize a call with us, we will explain everything and you will understand how easy it can be when you have the right people near.
            </p>
            <div className="spacing-36">&nbsp;</div>
            <a href="https://calendly.com/d/cmfw-74d-bs5/lazzarotti-discovery-call" className="main-button">Schedule your call</a>
          </Grid>

          <Grid item xs={12} sm={6}>
            <img src={serv_01} className="f-work-main" />
          </Grid>

        </Grid>
      </div>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
        <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <div style={{ width:"100%", backgroundColor:"#f6f7f6"}}>
        <div className="container">
          <Grid container spacing={{ xs: 2, md: 3 }} >
            <Grid item xs={12} md={6}>
              <h2>ARCHITECTURE & PLANNING</h2>
              <h3>DEVELOPMENT OF THE IDEAS, PLANS, ARCHITECTURE, EXTERIORS </h3>
              <ul className="main-text" style={{ paddingRight:"3%" }}>
                <li style={{ marginTop:"14px" }}>Preliminary development of Client’s ideas</li>
                <li style={{ marginTop:"14px" }}>Architectural works </li>
                <li style={{ marginTop:"14px" }}>Engineering works </li>
                <li style={{ marginTop:"14px" }}>Proposals for the PROPERTY development and our view of the project</li>
                <li style={{ marginTop:"14px" }}>Proposal for the EXTERIOR façade style </li>
                <li style={{ marginTop:"14px" }}>Proposal of the interior design </li>
              </ul>
              <p className="main-text">
                Our Studio can easily span from any request related to Architecture, landscape, interior and exterior design. Our Studio already has a deep knowledge in the development and realization of the following projects related to these specific areas:
              </p>
              <ul className="main-text" style={{ paddingRight:"3%" }}>
                <li style={{ marginTop:"14px" }}>Shopping Malls		(Commercial property)</li>
                <li style={{ marginTop:"14px" }}>5-star Hotel		(Hospitality)</li>
                <li style={{ marginTop:"14px" }}>4-star Hotel		(Hospitality)</li>
                <li style={{ marginTop:"14px" }}>Production Factory	(Commercial)</li>
                <li style={{ marginTop:"14px" }}>Hospital		(Hospitality)</li>
                <li style={{ marginTop:"14px" }}>Private VILLA		(Residential – private)</li>
                <li style={{ marginTop:"14px" }}>Townhouse complex	(Residential – public)</li>
                <li style={{ marginTop:"14px" }}>Landscape Design	(Residential – private/public)</li>
                <li style={{ marginTop:"14px" }}>External Façade		(Commercial property)</li>
              </ul>
              <p className="main-text">
              As you can see from the list of different projects we have already followed during our many years of experience, our Studio is extremely flexible and ready to face any possible task the Client has to offer us. Spanning from commercial properties, to private investments – any challenge is more than welcome and you will find our Studio always ready to any possible request you have.
              </p>
              <div className="spacing-36">&nbsp;</div>
              <a href="https://calendly.com/d/cmfw-74d-bs5/lazzarotti-discovery-call" className="main-button" style={{ backgroundColor:"#050000" }}>SCHEDULE YOUR CALL </a>
              <div className="spacing-96">&nbsp;</div>
            </Grid>
            <Grid item xs={12} md={6}><img src={serv_02} style={{ width:"100%"}} /></Grid>
          </Grid>
        </div>
      </div>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
        <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <div className="container">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <h2>FULL-SERVICE INTERIOR DESIGN</h2>
            <h3>FULL-SERVICE DESIGN BEGINS WITH A COMPLIMENTARY DISCOVERY CALL</h3>
            <ul className="main-text" style={{ paddingRight:"3%" }}>
              <li style={{ marginTop:"14px" }}>Residential Projects & Commercial </li>
              <li style={{ marginTop:"14px" }}>Furnishings & decor</li>
              <li style={{ marginTop:"14px" }}>Interior Construction Design for new builds & renovations</li>
              <li style={{ marginTop:"14px" }}>Custom Furniture</li>
              <li style={{ marginTop:"14px" }}>Personalized Artwork Services</li>
              <li style={{ marginTop:"14px" }}>Floor plans, design boards, elevations, and renderings to clearly communicate design concepts</li>
              <li style={{ marginTop:"14px" }}>3D renderings</li>
              <li style={{ marginTop:"14px" }}>Far-reaching access to one-of-a-kind pieces</li>
              <li style={{ marginTop:"14px" }}>Architectural Detailing</li>
              <li style={{ marginTop:"14px" }}>AutoCAD Drawings</li>
              <li style={{ marginTop:"14px" }}>Kitchen and Bath Design</li>
              <li style={{ marginTop:"14px" }}>Lighting Design and Fixture Selection</li>
            </ul>
            <p className="main-text">
              This in-depth service is for those who care deeply about living in a home they’re in love with. Allow us to step in and do what we do best: highly custom and personalized design where all of the work is left to us, and you get your valuable time back. Partner with us to experience our unparalleled interior design services and discover the difference that exceptional craftsmanship, innovative design, and personalized attention can make in transforming your space into an elevated yet warm and approachable sanctuary that you will cherish for years to come. We are taking the road less traveled, will you join us?
            </p>
            <div className="spacing-36">&nbsp;</div>
            <a href="#" className="main-button">SCHEDULE YOUR CONSULTATION</a>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={serv_03} className="f-work-main" />
          </Grid>
        </Grid>
      </div>      

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
        <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <div className="container">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={12} sx={{ textAlign:"center"}}>
            <h2>HEAR WHAT OUR CLIENT’S HAVE TO SAY</h2>
            <div style={{ textAlign:"right"}}>
              <FontAwesomeIcon icon={faAngleLeft}  className="arrow-list" onClick={() => {prev()}} />
              <FontAwesomeIcon icon={faAngleRight} className="arrow-list" onClick={() => {next()}} />
            </div>
            {testimonials.map((testimonail, key)=>{
              return(
                <div id={'testimonal_' + key} style={{ padding:"0 3%", display: currentTestimonial === key ? "block" : "none" }}>
                  <h3>{testimonail.name}</h3>
                  <p className="main-text">
                    {testimonail.text}
                  </p>
                  <a href={testimonail.link} className="main-text" style={{ textDecoration:"underline"}}>view project</a>
                </div>
              )
            })}
          </Grid>
        </Grid>
        <div className="spacing-96">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={6} sm={3}> <img src={serv_101} style={{ width:"100%" }} /> </Grid>
          <Grid item xs={6} sm={3}> <img src={serv_102} style={{ width:"100%" }} /> </Grid>
          <Grid item xs={6} sm={3}> <img src={serv_103} style={{ width:"100%" }} /> </Grid>
          <Grid item xs={6} sm={3}> <img src={serv_104} style={{ width:"100%" }} /> </Grid>
        </Grid>
        <div className="spacing-64">&nbsp;</div>
        <div style={{ width:"100%", textAlign:"center" }}>
          <a href="/portfolio"  className="main-text" style={{ textDecoration:"underline" }}>VIEW OUR PORTFOLIO</a>
        </div>
      </div>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
      </div>

      <div style={{ width:"100%", backgroundColor:"#f6f7f6"}}>
        <div className="container">
          <Grid container spacing={{ xs: 2, md: 3 }} >
            <Grid item xs={12} md={12} style={{ textAlign:"center" }}>
              <div className="spacing-48">&nbsp;</div>
              <h3>DESIGN SERVICES</h3>
              <h2>ELEVATED BY BEAUTY</h2>
              <p className="main-text">
                Specializing in whole-home transformations, we design with intention to deliver interiors with a depth of character and emotion, a breadth of function and practicality, and always rooted in beauty. 
              </p>
              <p className="main-text">
                If you are ready to get started, schedule your complimentary discovery call below.
              </p>
              <div className="spacing-36">&nbsp;</div>
              <a href="https://calendly.com/d/cmfw-74d-bs5/lazzarotti-discovery-call" className="main-button">SCHEDULE YOUR CALL </a>
              <div className="spacing-96">&nbsp;</div>
              <p className="main-text">
                <i>See our <a href="/faq" className="main-text" style={{ textDecoration:"underline" }}><i>FAQs</i></a> for more general information.</i>
              </p>
              <div className="spacing-96">&nbsp;</div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
};

export default Services;