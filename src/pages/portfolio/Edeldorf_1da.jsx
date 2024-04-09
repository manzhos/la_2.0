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
for (let i=1; i<=32; i++) {
  Images[i] = require(`../../public/assets/portfolio/edeld_apt_1d_v2/ed_apt1d_v2_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `ed1da_${key}` })
})

const Edeldorf_1da = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Edeldorf 1D A</h2>
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
        Linden luxury apartment 15-C is a modern yet luxurious property located inside the building complex LINDEN – estimated as the most expensive property apartments in Town. 
      </p>
      <p className="main-text">
        In this project our design studio as usual took the task to completely re-design the apartment space to suit the requirements of the Owners – in order to increase the usable area, and have a spacious kitchen with island, dining area and living room. 
      </p>
      <p className="main-text">
        Warm neutral yet sophisticated tones give this project the warmth required to the people who are going to live there – plus an extra touch of beige palette combined with natural stone in the kitchen and bathroom that always embrace the owner in their cozy but luxurious feel. 
      </p> */}

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>

    </Box>      
  )
};

export default Edeldorf_1da;