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
for (let i=1; i<=88; i++) {
  Images[i] = require(`../../public/assets/portfolio/tt_307/tt_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `tt_307_${key}` })
})

const TT_307 = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Luxury modern Penthouse</h2>
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
        Introducing one of the most exclusive Penthouses of the entire Kiev city, nestled in the picturesque neighborhood of Taryan Towers in Pechersk district . The inspiration for this project was to seamlessly blend the existing style and charm of the building with fresh finishes and furnishings, creating a harmonious fusion of modern and new. In this second part II of the project, related to the second and biggest Penthouse, located at Floors 32 and 33, we focused on elevating the property to new heights while respecting its unique character and history.
        <br />
        The kitchen, inspired by moody and timeless designs, introduces bold elements that make a striking statement. We carefully selected exquisite materials and finishes to create a space that is both functional and visually stunning, serving as the heart of the home. Rattan accents and white oak cabinetry add the perfect warmth.
      </p>
      <p className="main-text">
        Our goal for the children's spaces was to design forward-thinking and captivating rooms that capture each child's personality and needs. The playroom, designed with a double level with internal staircase, thanks to the height of ceilings hues and soft dusty color palette. Intentionally designed to provide a versatile space that can be enjoyed by the children and adapt to their changing preferences over the years. Purposeful storage solutions were integrated to house books, toys, and art supplies, ensuring a clutter-free and organized environment.
      </p>
      <p className="main-text">
        In the girl's room, we incorporated soft feminine and playful elements that will grow with her over time, such as a floral wallpaper and pops of blush pink and green accents. The custom-built bed not only adds a touch of sophistication but also offers practical storage solutions to accommodate her belongings as she grows into her teenage years.
        <br />
        The Master Bathroom also designed with a double-deck steps going into the shower/spa area, with natural marble stone on the floor and a panoramic Jacuzzi bath at the corner of the room, in order to enhance romance and enjoy the stunning view outside.
      </p>

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>


    </Box>      
  )
};

export default TT_307;