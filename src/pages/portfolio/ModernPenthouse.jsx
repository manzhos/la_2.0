import React from "react";
import Lightbox from "yet-another-react-lightbox"; // https://yet-another-react-lightbox.com/

import {
  Box,
  ImageList,
  ImageListItem,
} from '@mui/material/';

import "yet-another-react-lightbox/styles.css";

// content images
const Images    = [],
      itemData  = [];
for (let i=1; i<=12; i++) {
  Images[i] = require(`../../public/assets/portfolio/modern_penthouse/modern_penthouse_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `modern_penthouse_${key}` })
})

const ModernPenthouse = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Modern Penthouse</h2>
      <ImageList variant="standard" cols={3}>
        {itemData.map((item, key) => (
          <ImageListItem 
            style={{ cursor:"pointer" }}
            onClick={() => {
              setIndex(key);
              console.log('current:', key);
            }}
          >
            <img
              srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Lightbox
        index={index}
        slides={itemData}
        open={index >= 0}
        close={() => setIndex(-1)}
      />

      <div className="spacing-48">&nbsp;</div>
      <p className="main-text">
        The Modern Penthouse is a modern and eclectic project that was designed to reflect the spirit and personality of the Client.
        <br/>
        The project, located at the last two top floors of an old soviet building near the House of Parliament in Kiev, is internally developed in three different working levels.
        <br/>
        Straight modern lines, and black-white contrast colors, was the dominant theme chosen.
      </p>
      <p className="main-text">
        The total area of 760 m2 took into account some specific design and engineering solutions that pushed further the limits of both our engineers and the building itself.
        <br/>
        In fact a swimming pool was planned to be realized in the middle of the living room – 27 m3 of water with a fully glass facade.
        <br/>
        The challenge given in order to realize a swimming pool on the last floor of an old soviet building was one-of-a-kind, and yet very stimulating and interesting for us.
      </p>
      <p className="main-text">
        Our engineering Italian office provided then a complete proposal, a full set of shop drawings for approval by local authorities, in order to start the works.
        <br/>
        Calculations made by our staff, included the study of the building structure: we searched in local Kiev architectural archives for the old project of how the fundaments of the building were realized during USSR era.
        <br/>
        Also we made a full brand new calculation on the water weights and stress-test on the glass walls, another challenge inside the challenge.
      </p>
      <p className="main-text">
        <b>Our engineering Italian office provided then a complete proposal, a full set of shop drawings for approval by local authorities, in order to start the works.</b>
      </p>
      <p className="main-text">
        Another important individual project and very interesting challenge, was the full design and realization of a motorized round table, diam. 2300mm.
        <br/>
        This round table was required to reach from normal table dining level (+750mm from floor level) up to a maximum height of +2200mm.
        <br/>
        Total weight of the glass and structure to be raised was almost 400 kgs.
      </p>
      <p className="main-text">
        Not only: the central part of the table (diam. 1400mm) was supposed to be rotating. The external part (diam. 2300mm) was fixed.
        <br/>
        The biggest challenge here faced by our engineers, was the fact to design a safe table, that could raise in safety, and considering it was a dining table, that no bottles, or glasses were falling off during the process.
        <br/>
        Our engineers provided again a fully working and wonderful table that passed all possible tests, and that was finally connected to the Smart-Home system in order to activate the movement from the phone or ipad.
      </p>
      <p className="main-text">
        All furniture that can be seen in the various renders was all individually designed by our Studio, and then realized in accordance with the shop-drawings that were made by us.
        <br/>
        Even sofas and armchairs were individually designed and a specific executive drawing was prepared for each one of them. Almost nothing was ordered by catalogue.
      </p>

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>


    </Box>      
  )
};

export default ModernPenthouse;