import React from "react";
import Lightbox from "yet-another-react-lightbox"; // https://yet-another-react-lightbox.com/

import {
  Box,
  ImageList,
  ImageListItem,
} from '@mui/material/';

import "yet-another-react-lightbox/styles.css";

// content images
import img01 from '../../public/assets/portfolio/kadima_resort/interiors/1.jpg'
import img02 from '../../public/assets/portfolio/kadima_resort/interiors/2.jpg'
import img03 from '../../public/assets/portfolio/kadima_resort/interiors/3.jpg'
import img04 from '../../public/assets/portfolio/kadima_resort/interiors/4.jpg'
import img05 from '../../public/assets/portfolio/kadima_resort/interiors/5.jpg'
import img06 from '../../public/assets/portfolio/kadima_resort/interiors/6.jpg'
import img07 from '../../public/assets/portfolio/kadima_resort/interiors/7.jpg'
import img08 from '../../public/assets/portfolio/kadima_resort/interiors/8.jpg'
import img09 from '../../public/assets/portfolio/kadima_resort/interiors/9.jpg'
import img10 from '../../public/assets/portfolio/kadima_resort/interiors/10.jpg'
import img11 from '../../public/assets/portfolio/kadima_resort/interiors/11.jpg'
import img12 from '../../public/assets/portfolio/kadima_resort/interiors/12.jpg'
import img13 from '../../public/assets/portfolio/kadima_resort/interiors/13.jpg'
import img14 from '../../public/assets/portfolio/kadima_resort/interiors/14.jpg'
import img15 from '../../public/assets/portfolio/kadima_resort/interiors/15.jpg'
import img16 from '../../public/assets/portfolio/kadima_resort/interiors/16.jpg'
import img17 from '../../public/assets/portfolio/kadima_resort/interiors/17.jpg'
import img18 from '../../public/assets/portfolio/kadima_resort/interiors/18.jpg'
import img19 from '../../public/assets/portfolio/kadima_resort/interiors/19.jpg'
import img20 from '../../public/assets/portfolio/kadima_resort/interiors/20.jpg'
import img21 from '../../public/assets/portfolio/kadima_resort/interiors/21.jpg'
import img22 from '../../public/assets/portfolio/kadima_resort/interiors/22.jpg'
import img23 from '../../public/assets/portfolio/kadima_resort/interiors/23.jpg'
import img24 from '../../public/assets/portfolio/kadima_resort/interiors/24.jpg'
import img25 from '../../public/assets/portfolio/kadima_resort/interiors/25.jpg'
import img26 from '../../public/assets/portfolio/kadima_resort/interiors/26.jpg'
import img27 from '../../public/assets/portfolio/kadima_resort/interiors/C1.jpg'
import img28 from '../../public/assets/portfolio/kadima_resort/interiors/C2.jpg'
import img29 from '../../public/assets/portfolio/kadima_resort/interiors/C3.jpg'
import img30 from '../../public/assets/portfolio/kadima_resort/interiors/C4.jpg'
import img31 from '../../public/assets/portfolio/kadima_resort/interiors/K1.jpg'
import img32 from '../../public/assets/portfolio/kadima_resort/interiors/K2.jpg'
import img33 from '../../public/assets/portfolio/kadima_resort/interiors/K3.jpg'
import img34 from '../../public/assets/portfolio/kadima_resort/interiors/K4.jpg'
import img35 from '../../public/assets/portfolio/kadima_resort/interiors/K5.jpg'
import img36 from '../../public/assets/portfolio/kadima_resort/interiors/L1.jpg'
import img37 from '../../public/assets/portfolio/kadima_resort/interiors/L2.jpg'
import img38 from '../../public/assets/portfolio/kadima_resort/interiors/L3.jpg'
import img39 from '../../public/assets/portfolio/kadima_resort/interiors/L4.jpg'
import img40 from '../../public/assets/portfolio/kadima_resort/interiors/L5.jpg'
import img41 from '../../public/assets/portfolio/kadima_resort/interiors/L6.jpg'

const itemData = [
  { src: img01, title: 'kadima_resort_interior_01', },
  { src: img02, title: 'kadima_resort_interior_02', },
  { src: img03, title: 'kadima_resort_interior_03', },
  { src: img04, title: 'kadima_resort_interior_04', },
  { src: img05, title: 'kadima_resort_interior_05', },
  { src: img06, title: 'kadima_resort_interior_06', },
  { src: img07, title: 'kadima_resort_interior_07', },
  { src: img08, title: 'kadima_resort_interior_08', },
  { src: img09, title: 'kadima_resort_interior_09', },
  { src: img10, title: 'kadima_resort_interior_10', },
  { src: img11, title: 'kadima_resort_interior_11', },
  { src: img12, title: 'kadima_resort_interior_12', },
  { src: img13, title: 'kadima_resort_interior_13', },
  { src: img14, title: 'kadima_resort_interior_14', },
  { src: img15, title: 'kadima_resort_interior_15', },
  { src: img16, title: 'kadima_resort_interior_16', },
  { src: img17, title: 'kadima_resort_interior_17', },
  { src: img18, title: 'kadima_resort_interior_18', },
  { src: img19, title: 'kadima_resort_interior_19', },
  { src: img20, title: 'kadima_resort_interior_20', },
  { src: img21, title: 'kadima_resort_interior_21', },
  { src: img22, title: 'kadima_resort_interior_22', },
  { src: img23, title: 'kadima_resort_interior_23', },
  { src: img24, title: 'kadima_resort_interior_24', },
  { src: img25, title: 'kadima_resort_interior_25', },
  { src: img26, title: 'kadima_resort_interior_26', },
  { src: img27, title: 'kadima_resort_interior_27', },
  { src: img28, title: 'kadima_resort_interior_28', },
  { src: img29, title: 'kadima_resort_interior_29', },
  { src: img30, title: 'kadima_resort_interior_30', },
  { src: img31, title: 'kadima_resort_interior_31', },
  { src: img32, title: 'kadima_resort_interior_32', },
  { src: img33, title: 'kadima_resort_interior_33', },
  { src: img34, title: 'kadima_resort_interior_34', },
  { src: img35, title: 'kadima_resort_interior_35', },
  { src: img36, title: 'kadima_resort_interior_36', },
  { src: img37, title: 'kadima_resort_interior_37', },
  { src: img38, title: 'kadima_resort_interior_38', },
  { src: img39, title: 'kadima_resort_interior_39', },
  { src: img40, title: 'kadima_resort_interior_40', },
  { src: img41, title: 'kadima_resort_interior_41', },
];

const KadimaResortInterior = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Kadima Lakeview Resort Interiors</h2>
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

export default KadimaResortInterior;