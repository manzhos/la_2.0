import React from "react";
import Lightbox from "yet-another-react-lightbox"; // https://yet-another-react-lightbox.com/

import {
  Box,
  ImageList,
  ImageListItem,
} from '@mui/material/';

import "yet-another-react-lightbox/styles.css";

import busov_video from '../../public/assets/portfolio/busov/Busov.mp4'

// content images
const Images    = [],
      itemData  = [];
for (let i=1; i<=80; i++) {
  Images[i] = require(`../../public/assets/portfolio/busov/busov_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `tt_161_${key}` })
})

const Busov = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>BUSOV HILL 155</h2>
      <div className="spacing-24">&nbsp;</div>
      <video style={{ width: '100%' }} controls loop="loop" playsinline="" muted="muted">
          <source src={busov_video} type="video/mp4" />
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

      {/* <div className="spacing-48">&nbsp;</div>
      <p className="main-text">
        A modern and sleek apartment located in the Tower 1 of the modern residential complex Taryan Towers, this apartment of 120 m2 plus external terrace was planned with three total bedrooms and two bathrooms by request of the Client. 
      </p>
      <p className="main-text">
        Modern style approached with a touch of luxury and selected interior design manufacturers. 
      </p> */}

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>


    </Box>      
  )
};

export default Busov;