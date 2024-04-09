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
for (let i=1; i<=15; i++) {
  Images[i] = require(`../../public/assets/portfolio/donbass_palace/donbass_palace_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `donbass_palace_${key}` })
})

const DonbassPalace = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Donbass Palace</h2>
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
        The Donbass Palace hotel was the first and only 5-star hotel built in the city of Donetsk during the years 2004-2006. And it was also one of the very first projects followed by our company in Ukraine.
        <br/>
        Our Studio was awarded with the supply and installation of all the marble works required for both internal and external.
      </p>
      <p className="main-text">
        The overall area of public areas for all the 6 floors was consisting of 2.500 m2 including the SPA and pool zones. Our contract was including the supply also of marble for the two main restaurants, the external covered terrace, and the Japanese buffet.
      </p>

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>


    </Box>      
  )
};

export default DonbassPalace;