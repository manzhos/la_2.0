import React from "react";
import { useNavigate } from 'react-router-dom';

import {
  Box,
  ImageList,
  ImageListItem,
} from '@mui/material/';


import miami_ph       from '../public/assets/portfolio/miami_ph.jpg'
import luxury_villa   from '../public/assets/portfolio/luxury_villa.jpg'
import kadima_resort  from '../public/assets/portfolio/kadima_resort.jpg'
import rv_87          from '../public/assets/portfolio/rv_87.jpg'
import tt_307          from '../public/assets/portfolio/tt_307.jpg'
import amb_vie          from '../public/assets/portfolio/amb_vie.jpg'

import villaRossa from '../public/assets/portfolio/villa_rossa.jpg'
import miamiPh from '../public/assets/portfolio/miamiPh.jpg'
import kadima from '../public/assets/portfolio/kadima.jpg'
import rv from '../public/assets/portfolio/rv.jpg'
import linden from '../public/assets/portfolio/linden.jpg'
import ed_apt1d from '../public/assets/portfolio/ed_apt1d.jpg'
import ed_apt1da from '../public/assets/portfolio/ed_apt1da.jpg'
import ed_apt2a from '../public/assets/portfolio/ed_apt2a.jpg'
import tt_216 from '../public/assets/portfolio/tt_216.jpg'
import villa_lux from '../public/assets/portfolio/villa_lux.jpg'
import parkinn_donetsk from '../public/assets/portfolio/parkinn_donetsk.jpg'
import tt_161 from '../public/assets/portfolio/tt_161.jpg'
import tt_307h from '../public/assets/portfolio/tt_307h.jpg'
import cult_luxury from '../public/assets/portfolio/cult_luxury.jpg'
import modern_penthouse from '../public/assets/portfolio/modern_penthouse.jpg'
import cult_tsum from '../public/assets/portfolio/cult_tsum.jpg'
import parkinn_kiev from '../public/assets/portfolio/parkinn_kiev.jpg'
import villa_in_pineta from '../public/assets/portfolio/villa_in_pineta.jpg'
import lipinka_house from '../public/assets/portfolio/lipinka_house.jpg'
import lipinka from '../public/assets/portfolio/lipinka.jpg'
import scm from '../public/assets/portfolio/scm.jpg'
import donbass_arena from '../public/assets/portfolio/donbass_arena.jpg'
import ukrinvest from '../public/assets/portfolio/ukrinvest.jpg'
import stolichni from '../public/assets/portfolio/stolichni.jpg'
import bayan_palace from '../public/assets/portfolio/bayan_palace.jpg'
import donbass_palace from '../public/assets/portfolio/donbass_palace.jpg'

import clm_video from '../public/assets/portfolio/ContemporaryLuxuryModern/interior_final.mp4';
import award from '../public/assets/portfolio/ContemporaryLuxuryModern/penthouse_award.png';
import busov_video from '../public/assets/portfolio/busov/Busov.mp4';

const itemData = [
  { src: miami_ph,      title: 'Coral Gables Miami Penthouse',        path: '/portfolio/miami_ph'},
  { src: luxury_villa,  title: 'Luxury Modern Villa',                 path: '/portfolio/luxury_villa'},
  { src: kadima_resort, title: 'Kadima Lakeview Resort',              path: '/portfolio/kadima_resort'},
  { src: rv_87,         title: 'RIVIERA CONTEMPORARY LUXURY VILLA',   path: '/portfolio/rv_87'},
  { src: tt_307,        title: 'Luxury modern Penthouse',             path: '/portfolio/tt_307'},
  { src: amb_vie,       title: 'THE AMBASSY WIEN GLAMOUR PENTHOUSE',  path: '/portfolio/amb_vie'},
];


const Portfolio = () => {
  const navigate  = useNavigate();

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-64">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Portfolio</h2>
      <div style={{ width:"100%", display:"flex", flexDirection:"row", justifyContent:"center" }}>
        <a href="/portfolio/residential" style={{ textDecoration:"none" }}><h2 style={{ borderBottom:"1px solid black" }}>RESIDENTIAL</h2></a>
        <h2 style={{ margin:"0 40px" }}>|</h2>
        <a href="/portfolio/commercial" style={{ textDecoration:"none" }}><h2 style={{ borderBottom:"1px solid black" }}>COMMERCIAL</h2></a>
      </div>

      <div className="spacing-64">&nbsp;</div>

      <h2 style={{ textAlign:"center" }}>Featured Projects</h2>
      <img src={villaRossa} style={{ width:"100%" }} alt="Villa Rossa" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/luxury_villa" className="portfolio-link"><h2>“VILLA ROSE” — LUXURY MODERN VILLA OUTSIDE OF KIEV</h2></a>
      <p className="main-text">
        For the “Villa Rose” project, our interior design studio has envisioned the whole property design (interiors, exterior façade, landscape) that is a daring and innovative blend of ancient Italian Classics aesthetics and contemporary luxury elegance.
      </p>
      <p className="main-text">
        <i>Embracing a basic palette of deep black and white tones, traditional molding and millwork enfold the space, creating a cocoon of warmth and richness. Dramatic and bold, the custom-designed marble paving, sculpted Italian white Carrara, commands attention with its distinct shape and texture. This project is a theatrical display of design, pushing boundaries and redefining luxury in a show house setting.</i>
      </p>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={miamiPh} style={{ width:"100%" }} alt="Miami Penthouse" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/miami_ph" className="portfolio-link"><h2>CORAL GABLES MIAMI PENTHOUSE</h2></a>
      <p className="main-text">
        For the Coral Gables Miami Penthouse new design, our interior design studio has envisioned a primary open-space area connecting the Living Room with the Kitchen, full of  aesthetics and contemporary elegance. The space becomes not just a kitchen; it's a new luxury concept of open glass elements showcasing interiors, where new design trends applied to the kitchen meets modern sophistication and luxury.
      </p>
      <p className="main-text">
        Embracing a palette of beige and grey neutral tones,modern molding and millwork enfold the space, creating a cocoon of warmth and richness. Dramatic and bold, the double island of the kitchen sculpted from natural grey marble, commands attention with its distinct shape and texture. This project is a theatrical display of design, pushing boundaries and redefining luxury in a show house setting.
      </p>
      <p className="main-text">
        The double-deck sofa, facing both the kitchen and the TV zone, embroidered in soft cashmere leather provides further more the necessary warmth and style to the rest of the habitable space developed around.
      </p>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <video style={{ width: '100%' }} controls loop="loop" playsinline="" muted="muted">
          <source src={clm_video} type="video/mp4" />
      </video>
      <div className="spacing-24">&nbsp;</div>
      <p className="main-text">
        Everyone Welcomes The Most Luxurious and prestigious Penthouse in Ukraine, awarded by the EUROPEAN PROPERTY AWARDS Development committee 
      </p>
      <div style={{ width:"100%", textAlign:"center" }}>
        <img src={award} style={{ width:"180px" }} alt="Award" />
      </div>
      <p className="main-text">
        as the WINNER for EAST UKRAINE in 2021-2022 in its category PENTHOUSE as the best of the best.
      </p>
      <a href="/portfolio/clm" style={{ textDecoration:"underline", textDecorationThickness:"1px", textAlign:"center", color:"black" }}><h2 style={{ marginBottom:"0"}}>Contemporary Luxury Modern</h2></a>
      <p className="main-text">
        is the name of the style that our Studio decided to re-invent specifically for this project. 
      </p>
      <p className="main-text">
        Distributed in two main levels, for an overall 350m2  one of the Main Feature that we challenged ourselves with was the big Mezzanine above the Living Room, reaching the overall height of 6.5 meters.
      </p>
      <p className="main-text">
        As usual we employed a lot of warm neutral colors suitable for any future Client but yet extremely sophisticated and deep. 
      </p>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={kadima} style={{ width:"100%" }} alt="South Africa" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/kadima_resort" className="portfolio-link"><h2>KADIMA LAKEVIEW RESORT</h2></a>
      <p className="main-text">
        Kadima Lakeview Resort, outside Johannesburg, South Africa is the result of a unique transformation first of all of the external façade and renovated landscape design of the property.
      </p>
      <p className="main-text">
        The heart of this project lies in the external terraces and fully-equipped Rooftop Bar, where we embarked on a design endeavor that would leave anyone speechless. 
      </p>
      <p className="main-text">
        By opening up all the numerous patios and terraces, we created a magnificent interconnection between inside and outside that floods the space with natural light and offers a breathtaking view of the picturesque surroundings. 
      </p>
      <p className="main-text">
        This project is not just about aesthetics; it's about pushing the boundaries of design and showcasing the possibilities. By curating an out-of-the-box approach, we bring texture and depth to the space, employing different materials and original applications. The layered design achieved through repeated use of the same material in various forms, shapes, and locations demonstrates that unexpected elements can create breathtaking results.
      </p>
      <p className="main-text">
        In conclusion, this extremely tasteful lux project in South Africa  is an extraordinary example of a full gut remodel that has surpassed all expectations. The meticulous attention to detail, the masterful use of materials, and the seamless blend of functionality and aesthetics create an unforgettable space. It serves as a testament to the power of design and the transformative impact it can have on a home and its inhabitants.
      </p>
      <p className="main-text">
        We highly recommend to have a look also at the Main Interiors of the Resort, in order to guide you through the other unique solutions adopted in the project.
      </p>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={rv} style={{ width:"100%" }} alt="RIVIERA CONTEMPORARY LUXURY VILLA" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/kadima_resort" className="portfolio-link"><h2>RIVIERA CONTEMPORARY LUXURY&nbsp;VILLA</h2></a>
      <p className="main-text">
        Nestled within the tranquil, tree-lined enclave of Riviera Village luxury Home Rerteat, Kiev Region, this exquisite residence exemplifies our design team's prowess in crafting sophisticated, functional, and captivating living spaces tailored to the unique requirements of a modern family. This new completely built from scratch project gave us the opportunity to showcase the best of our style. Drawing inspiration from relaxed yet intricated contemporary aesthetics, clean lines, and a neutral color palette punctuated with thoughtful use color, we have created a refined sanctuary for the family to relish and entertain.
      </p>
      <p className="main-text">
        The design ethos behind this project stems from the clients' affinity for relaxed modern elegance, incorporating elements of o materials, contrasting textures, and highly customized wow moments. The result is a harmonious interplay of form, scale, and functionality, bespoke to the family's specific desires.
      </p>
      <p className="main-text">
        Some of the standout rooms and design elements within the project include:
      </p>
      <p className="main-text">
        Living Room: The meticulously selected tunnel fireplace boasts a stunning Italian Onyx back-lit wall feature, and a contrasting modern ceiling all above, providing a striking focal point. Complemented by a textured credenza with woven wood doors and minimal floating shelves, the living room exudes an aura of warmth and sophistication. The matching custom high performance sofas were not only uniquely designed to fit like a glove in this room but withstand heavy use from both kids and pets.
      </p>
      <p className="main-text">
        Cabinet: This sun-drenched space features a breathtaking library/display built-in, crafted from European white oak with contrasting black dividers. Designed as a cozy reading nook, it adds depth and visual interest to the open-plan living area.
      </p>
      <p className="main-text">
        Dining Room: The natural wood tone table serves as a statement piece, juxtaposed against contrasting dark chairs and a dark custom accent ledge/wall design, culminating in a well-balanced and alluring dining space.
      </p>
      <p className="main-text">
        Master Bedroom: the sophisticated wall panels interconnected in contrast with a 3D marble wall, as well as the selection of the soft furniture and the TV wall shelves, create an all-in-one warm and embracing spacious room that invites you to lay down and relax.
      </p>
      <p className="main-text">
        Master Walk-in Closet: This beautiful modern walk-in closet with leather textures installed on the walls and on the door, as well as on some of the shelves is the final result of a customized design made in strict cooperation with our Italian furniture supplier.
      </p>
      <p className="main-text">
        This beautiful interior design project and renovation in Kiev Region, Ukraine, serves as a testament to our unwavering commitment to crafting spaces that are both functional and visually arresting. By focusing on high levels of intentionality and customization, we have transformed this family home into an inviting, modern, and inspiring haven.
      </p>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={linden} style={{ width:"100%" }} alt="LINDEN LUXURY APARTMENTS – KIEV" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/kadima_resort" className="portfolio-link"><h2>LINDEN LUXURY APARTMENTS – KIEV</h2></a>
      <p className="main-text">
        Linden luxury apartment 15-C is a modern yet luxurious property located inside the building complex LINDEN – estimated as the most expensive property apartments in Town.
      </p>
      <p className="main-text">
        In this project our design studio as usual took the task to completely re-design the apartment space to suit the requirements of the Owners – in order to increase the usable area, and have a spacious kitchen with island, dining area and living room.
      </p>
      <p className="main-text">
        Warm neutral yet sophisticated tones give this project the warmth required to the people who are going to live there – plus an extra touch of beige palette combined with natural stone in the kitchen and bathroom that always embrace the owner in their cozy but luxurious feel.
      </p>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={ed_apt1d} style={{ width:"100%" }} alt="EDELDORF – Apt. 1D" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/edeldorf1d" className="portfolio-link"><h2>EDELDORF – Apt. 1D</h2></a>
      {/* <p className="main-text">
        &nbsp;
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={ed_apt1da} style={{ width:"100%" }} alt="EDELDORF – Apt. 1D A" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/edeldorf1da" className="portfolio-link"><h2>EDELDORF – Apt. 1D A</h2></a>
      {/* <p className="main-text">
        &nbsp;
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={ed_apt2a} style={{ width:"100%" }} alt="EDELDORF – Apt. 2A" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/edeldorf2a" className="portfolio-link"><h2>EDELDORF – Apt. 2A</h2></a>
      {/* <p className="main-text">
        &nbsp;
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={tt_216} style={{ width:"100%" }} alt="TARYAN TOWERS LUXURY PENTHOUSE" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/tt_216" className="portfolio-link"><h2>TARYAN TOWERS LUXURY PENTHOUSE</h2></a>
      <p className="main-text">
        Located in the most modern building complex of the city of Kiev, Taryan Towers complex, this first Penthouse of 216 total m2 shows a modern look in the interior design selected by our Studio – the use of white natural marble in combination with more neutral beige and brown tones. 
      </p>
      <p className="main-text">
        Worth noticing the unique design that our Studio made for the kitchen, developed in two levels – as the height of the ceiling allowed us to apply a vertical movement to the space given for this property. 
      </p>
      <p className="main-text">
        Also on the second floor we always mention the jacuzzi area located in one of the external terraces of the Guest Bedroom (with roof above) and the modern design of the second Bedroom.
      </p>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <video style={{ width: '100%' }} controls loop="loop" playsinline="" muted="muted">
          <source src={busov_video} type="video/mp4" />
      </video>
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/tt_216" className="portfolio-link"><h2>BUSOV HILL</h2></a>
      {/* <p className="main-text">
        &nbsp;
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <div style={{ width:"100%", textAlign:"center" }}><img src={villa_lux} style={{ maxWidth: "640px" }} alt="Villa LUX" /></div>
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/villalux" className="portfolio-link"><h2>Villa LUX</h2></a>
      <p className="main-text">
        The Villa Lux project is by far the most important and exclusive project we followed so far in the entire career of our design Studio.
        <br />
        The complexity of the project, the specific client, the area of the house (6.500 m2 plus landascaping) required special and unique efforts by our company.
      </p>
      <p className="main-text">
        The project took our company 3 years to finish, but as a final result out studio was proud to be involved as sub-contractor in the building of one of the most beautiful houses ever built in the entire world!
      </p>
      <p className="main-text">
        Unfortunately, due to the very strict privacy policy, we are not allowed to show in public any picture of the works made and any photo.
        <br />
        The images here are the hand-made concepts, made at the beginning of the project for each individual room to show the style and the materials, colors and furniture employed.
      </p>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={donbass_palace} style={{ width:"100%" }} alt="DONBASS PALACE" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/donbass_palace" className="portfolio-link"><h2>DONBASS PALACE</h2></a>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={parkinn_donetsk} style={{ width:"100%" }} alt="PARK INN DONETSK" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/parkinn_donetsk" className="portfolio-link"><h2>PARK INN DONETSK</h2></a>
      {/* <p className="main-text">
        
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={tt_161} style={{ width:"100%" }} alt="TARYAN TOWERS MODERN" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/tt_161" className="portfolio-link"><h2>TARYAN TOWERS MODERN</h2></a>
      <p className="main-text">
        A modern and sleek apartment located in the Tower 1 of the modern residential complex Taryan Towers, this apartment of 120 m2 plus external terrace was planned with three total bedrooms and two bathrooms by request of the Client.
        <br/>
        Modern style approached with a touch of luxury and selected interior design manufacturers.
      </p>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={tt_307h} style={{ width:"100%" }} alt="TARYAN TOWERS LUXURY PENTHOUSE" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/tt_307" className="portfolio-link"><h2>TARYAN TOWERS LUXURY PENTHOUSE</h2></a>
      <p className="main-text">
        Introducing one of the most exclusive Penthouses of the entire Kiev city, nestled in the picturesque neighborhood of Taryan Towers in Pechersk district . The inspiration for this project was to seamlessly blend the existing style and charm of the building with fresh finishes and furnishings, creating a harmonious fusion of modern and new. In this second part II of the project, related to the second and biggest Penthouse, located at Floors 32 and 33, we focused on elevating the property to new heights while respecting its unique character and history.
        <br />
        The kitchen, inspired by moody and timeless designs, introduces bold elements that make a striking statement. We carefully selected exquisite materials and finishes to create a space that is both functional and visually stunning, serving as the heart of the home. Rattan accents and white oak cabinetry add the perfect warmth.
      </p>
      <p className="main-text">
        Our goal for the children's spaces was to design forward-thinking and captivating rooms that capture each child's personality and needs. The playroom, designed with a double level with internal staircase, thanks to the height of ceilings hues and soft dusty color palette. Intentionally designed to provide a versatile space that can be enjoyed by the children and adapt to their changing preferences over the years. Purposeful storage solutions were integrated to house books, toys, and art supplies, ensuring a clutter-free and organized environment.
      </p>
      <p className="main-text">
        In the girl's room, we incorporated soft feminine and playful elements that will grow with her over time, such as a floral wallpaper and pops of blush pink and green accents. The custom-built bed not only adds a touch of sophistication but also offers practical storage solutions to accommodate her belongings as she grows into her teenage years.
        <br />
        The Master Bathroom also designed with a double-deck steps going into the shower/spa area, with natural marble stone on the floor and a panoramic Jacuzzi bath at the corner of the room, in order to enhance romance and enjoy the stunning view outside.
      </p>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={cult_luxury} style={{ width:"100%" }} alt="CULT luxury" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/cult_luxury" className="portfolio-link"><h2>CULT luxury</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={modern_penthouse} style={{ width:"100%" }} alt="Modern Penthouse" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/modern_penthouse" className="portfolio-link"><h2>Modern Penthouse</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={cult_tsum} style={{ width:"100%" }} alt="Cult Tsum" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/cult_tsum" className="portfolio-link"><h2>Cult Tsum</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={parkinn_kiev} style={{ width:"100%" }} alt="Park Inn — Kiev" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/parkinn_kiev" className="portfolio-link"><h2>Park Inn — Kiev</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={villa_in_pineta} style={{ width:"100%" }} alt="Villa in Pineta" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/villainpineta" className="portfolio-link"><h2>Villa in Pineta</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={lipinka_house} style={{ width:"100%" }} alt="Lipinka House" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/lipinka_house" className="portfolio-link"><h2>Lipinka House</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={scm} style={{ width:"100%" }} alt="SCM" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/scm" className="portfolio-link"><h2>SCM</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={donbass_arena} style={{ width:"100%" }} alt="Donbass Arena" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/donbass_arena" className="portfolio-link"><h2>Donbass Arena</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={ukrinvest} style={{ width:"100%" }} alt="Ukrinvest" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/ukrinvest" className="portfolio-link"><h2>Ukrinvest</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={stolichni} style={{ width:"100%" }} alt="Stolichni" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/stolichni" className="portfolio-link"><h2>Stolichni</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={bayan_palace} style={{ width:"100%" }} alt="Bayan Palace" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/bayan_palace" className="portfolio-link"><h2>Bayan Palace</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      <img src={lipinka} style={{ width:"100%" }} alt="Lipinka" />
      <div className="spacing-24">&nbsp;</div>
      <a href="/portfolio/lipinka" className="portfolio-link"><h2>Lipinka</h2></a>
      {/* <p className="main-text">
      </p> */}

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>

      {/* <h2 style={{ textAlign:"center" }}>All projects</h2>
      <ImageList variant="standard" cols={3}>
        {itemData.map((item, key) => (
          <ImageListItem  style={{ cursor:"pointer" }} onClick={()=>{navigate(item.path)}}>
              <img
                srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <h4>{item.title}</h4>
          </ImageListItem>
        ))}
      </ImageList> */}

      {/* <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>       */}
    </Box>      
  )
};

export default Portfolio;