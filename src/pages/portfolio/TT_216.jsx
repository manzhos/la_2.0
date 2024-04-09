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
for (let i=1; i<=89; i++) {
  Images[i] = require(`../../public/assets/portfolio/tt_216/tt_216_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `tt_216_${key}` })
})

const TT_216 = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>TARYAN TOWERS LUXURY PENTHOUSE</h2>
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
        Located in the most modern building complex of the city of Kiev, Taryan Towers complex, this first Penthouse of 216 total m2 shows a modern look in the interior design selected by our Studio – the use of white natural marble in combination with more neutral beige and brown tones. 
      </p>
      <p className="main-text">
        Worth noticing the unique design that our Studio made for the kitchen, developed in two levels – as the height of the ceiling allowed us to apply a vertical movement to the space given for this property. 
      </p>
      <p className="main-text">
        Also on the second floor we always mention the jacuzzi area located in one of the external terraces of the Guest Bedroom (with roof above) and the modern design of the second Bedroom.
      </p>

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>


    </Box>      
  )
};

export default TT_216;