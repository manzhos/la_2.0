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
for (let i=1; i<=31; i++) {
  Images[i] = require(`../../public/assets/portfolio/donbass_arena/donbass_arena_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `donbass_arena_${key}` })
})

const DonbassArena = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Donbass Arena</h2>
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
        The Modern Penthouse is a modern and eclectic project that was designed to reflect the spirit and personality of the Client.
        <br/>
        The project, located at the last two top floors of an old soviet building near the House of Parliament in Kiev, is internally developed in three different working levels.
        <br/>
        Straight modern lines, and black-white contrast colors, was the dominant theme chosen.
      </p> */}


      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>

    </Box>      
  )
};

export default DonbassArena;