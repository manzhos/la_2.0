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
for (let i=1; i<=58; i++) {
  Images[i] = require(`../../public/assets/portfolio/tt2_216/tt2_216_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `tt2_216_${key}` })
})

const TT2_216 = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>TARYAN TOWER II</h2>
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

      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>


    </Box>      
  )
};

export default TT2_216;