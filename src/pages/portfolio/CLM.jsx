import React from "react";
import Lightbox from "yet-another-react-lightbox"; // https://yet-another-react-lightbox.com/

import {
  Box,
  ImageList,
  ImageListItem,
} from '@mui/material/';

import "yet-another-react-lightbox/styles.css";

import clm_video from '../../public/assets/portfolio/ContemporaryLuxuryModern/interior_final.mp4'
import award from '../../public/assets/portfolio/ContemporaryLuxuryModern/penthouse_award.png'

// content images
const Images    = [],
      itemData  = [];
for (let i=1; i<=59; i++) {
  Images[i] = require(`../../public/assets/portfolio/CLM/clm_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `clm_${key}` })
})

const CLM = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Contemporary Luxury Modern Penthouse</h2>
      <div className="spacing-24">&nbsp;</div>
      <video style={{ width: '100%' }} controls loop="loop" playsinline="" muted="muted">
          <source src={clm_video} type="video/mp4" />
      </video>
      <div className="spacing-24">&nbsp;</div>
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
        Everyone Welcomes The Most Luxurious and prestigious Penthouse in Ukraine, awarded by the EUROPEAN PROPERTY AWARDS Development committee 
      </p>
      <div style={{ width:"100%", textAlign:"center" }}>
        <img src={award} style={{ width:"180px" }} alt="Award" />
      </div>
      <p className="main-text">
        as the WINNER for EAST UKRAINE in 2021-2022 in its category PENTHOUSE as the best of the best.
      </p>
      <a href="/portfolio/clm" style={{ textDecoration:"underline", textDecorationThickness:"1px", textAlign:"center", color:"black" }}><h2 style={{ marginBottom:"0"}}>Contemporary Luxury Modern Penthouse</h2></a>
      <p className="main-text">
        is the name of the style that our Studio decided to re-invent specifically for this project. 
      </p>
      <p className="main-text">
        Distributed in two main levels, for an overall 350m2  one of the Main Feature that we challenged ourselves with was the big Mezzanine above the Living Room, reaching the overall height of 6.5 meters.
      </p>
      <p className="main-text">
        As usual we employed a lot of warm neutral colors suitable for any future Client but yet extremely sophisticated and deep. 
      </p>

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>


    </Box>      
  )
};

export default CLM;