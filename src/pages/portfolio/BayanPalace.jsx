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
for (let i=1; i<=8; i++) {
  Images[i] = require(`../../public/assets/portfolio/bayan_palace/bayan_palace_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `bayan_palace_${key}` })
})

const BayanPalace = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Bayan Palace</h2>
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
        This 5-star luxury hotel was entirely designed by our Studio for the internal marble works in all the public areas. In coordination with the American General Contractor, we decided to apply soft and beautiful materials. Statuario Bianco marble was highly selected, in order to obtain the best possible special design patterns shown in the photos, with the employ of “book-matching” slabs.
        <br/>
        Also the sense of veining, and color was very highly checked and inspected several times, in order to obtain the almost-perfect result.
      </p>
      <p className="main-text">
        Thin strips of black give the floor and walls and slightly more modern touch, and the rose colour of the Pernice other predominant marble, makes for the lobby one of the best of the whole middle-eastern hotels.
      </p>

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>

    </Box>      
  )
};

export default BayanPalace;