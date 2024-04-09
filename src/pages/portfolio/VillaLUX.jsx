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
for (let i=1; i<=22; i++) {
  Images[i] = require(`../../public/assets/portfolio/villa_lux/villa_lux_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `Villa_Lux_${key}` })
})

const VillaLUX = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>VILLA LUX</h2>
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

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>


    </Box>      
  )
};

export default VillaLUX;