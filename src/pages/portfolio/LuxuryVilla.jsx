import React from "react";
import PhotoAlbum from "react-photo-album"; // https://react-photo-album.com/
import Lightbox from "yet-another-react-lightbox"; // https://yet-another-react-lightbox.com/

import { theme } from '../../component/Theme';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  Box,
  ImageList,
  ImageListItem,
} from '@mui/material/';

import "yet-another-react-lightbox/styles.css";

// content images
import img01 from '../../public/assets/portfolio/luxury_villa/lv_01.jpg'
import img02 from '../../public/assets/portfolio/luxury_villa/lv_02.jpg'
import img03 from '../../public/assets/portfolio/luxury_villa/lv_03.jpg'
import img04 from '../../public/assets/portfolio/luxury_villa/lv_04.jpg'
import img05 from '../../public/assets/portfolio/luxury_villa/lv_05.jpg'
import img06 from '../../public/assets/portfolio/luxury_villa/lv_06.jpg'
import img07 from '../../public/assets/portfolio/luxury_villa/lv_07.jpg'
import img08 from '../../public/assets/portfolio/luxury_villa/lv_08.jpg'
import img09 from '../../public/assets/portfolio/luxury_villa/lv_09.jpg'
import img10 from '../../public/assets/portfolio/luxury_villa/lv_10.jpg'
import img11 from '../../public/assets/portfolio/luxury_villa/lv_11.jpg'
import img12 from '../../public/assets/portfolio/luxury_villa/lv_12.jpg'
import img13 from '../../public/assets/portfolio/luxury_villa/lv_13.jpg'
import img14 from '../../public/assets/portfolio/luxury_villa/lv_14.jpg'
import img15 from '../../public/assets/portfolio/luxury_villa/lv_15.jpg'
import img16 from '../../public/assets/portfolio/luxury_villa/lv_16.jpg'
import img17 from '../../public/assets/portfolio/luxury_villa/lv_17.jpg'
import img18 from '../../public/assets/portfolio/luxury_villa/lv_18.jpg'
import img19 from '../../public/assets/portfolio/luxury_villa/lv_19.jpg'
import img20 from '../../public/assets/portfolio/luxury_villa/lv_20.jpg'
import img21 from '../../public/assets/portfolio/luxury_villa/lv_21.jpg'
import img22 from '../../public/assets/portfolio/luxury_villa/lv_22.jpg'
import img23 from '../../public/assets/portfolio/luxury_villa/lv_23.jpg'
import img24 from '../../public/assets/portfolio/luxury_villa/lv_24.jpg'
import img25 from '../../public/assets/portfolio/luxury_villa/lv_25.jpg'
import img26 from '../../public/assets/portfolio/luxury_villa/lv_26.jpg'
import img27 from '../../public/assets/portfolio/luxury_villa/lv_27.jpg'
import img28 from '../../public/assets/portfolio/luxury_villa/lv_28.jpg'
import img29 from '../../public/assets/portfolio/luxury_villa/lv_29.jpg'
import img30 from '../../public/assets/portfolio/luxury_villa/lv_30.jpg'
import img31 from '../../public/assets/portfolio/luxury_villa/lv_31.jpg'
import img32 from '../../public/assets/portfolio/luxury_villa/lv_32.jpg'
import img33 from '../../public/assets/portfolio/luxury_villa/lv_33.jpg'
import img34 from '../../public/assets/portfolio/luxury_villa/lv_34.jpg'
import img35 from '../../public/assets/portfolio/luxury_villa/lv_35.jpg'
import img36 from '../../public/assets/portfolio/luxury_villa/lv_36.jpg'
import img37 from '../../public/assets/portfolio/luxury_villa/lv_37.jpg'
import img38 from '../../public/assets/portfolio/luxury_villa/lv_38.jpg'
import img39 from '../../public/assets/portfolio/luxury_villa/lv_39.jpg'
import img40 from '../../public/assets/portfolio/luxury_villa/lv_40.jpg'
import img41 from '../../public/assets/portfolio/luxury_villa/lv_41.jpg'
import img42 from '../../public/assets/portfolio/luxury_villa/lv_42.jpg'
import img43 from '../../public/assets/portfolio/luxury_villa/lv_43.jpg'

const itemData = [
  { src: img01, title: 'luxury_villa_01', },
  { src: img02, title: 'luxury_villa_02', },
  { src: img03, title: 'luxury_villa_03', },
  { src: img04, title: 'luxury_villa_04', },
  { src: img05, title: 'luxury_villa_05', },
  { src: img06, title: 'luxury_villa_06', },
  { src: img07, title: 'luxury_villa_07', },
  { src: img08, title: 'luxury_villa_08', },
  { src: img09, title: 'luxury_villa_09', },
  { src: img10, title: 'luxury_villa_10', },
  { src: img11, title: 'luxury_villa_11', },
  { src: img12, title: 'luxury_villa_12', },
  { src: img13, title: 'luxury_villa_13', },
  { src: img14, title: 'luxury_villa_14', },
  { src: img15, title: 'luxury_villa_15', },
  { src: img16, title: 'luxury_villa_16', },
  { src: img17, title: 'luxury_villa_17', },
  { src: img18, title: 'luxury_villa_18', },
  { src: img19, title: 'luxury_villa_19', },
  { src: img20, title: 'luxury_villa_20', },
  { src: img21, title: 'luxury_villa_21', },
  { src: img22, title: 'luxury_villa_22', },
  { src: img23, title: 'luxury_villa_23', },
  { src: img24, title: 'luxury_villa_24', },
  { src: img25, title: 'luxury_villa_25', },
  { src: img26, title: 'luxury_villa_26', },
  { src: img27, title: 'luxury_villa_27', },
  { src: img28, title: 'luxury_villa_28', },
  { src: img29, title: 'luxury_villa_29', },
  { src: img30, title: 'luxury_villa_30', },
  { src: img31, title: 'luxury_villa_31', },
  { src: img32, title: 'luxury_villa_32', },
  { src: img33, title: 'luxury_villa_33', },
  { src: img34, title: 'luxury_villa_34', },
  { src: img35, title: 'luxury_villa_35', },
  { src: img36, title: 'luxury_villa_36', },
  { src: img37, title: 'luxury_villa_37', },
  { src: img38, title: 'luxury_villa_38', },
  { src: img39, title: 'luxury_villa_39', },
  { src: img40, title: 'luxury_villa_40', },
  { src: img41, title: 'luxury_villa_41', },
  { src: img42, title: 'luxury_villa_42', },
  { src: img43, title: 'luxury_villa_43', },
];

const LuxuryVilla = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Luxury Modern Villa</h2>
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
        The Luxury Modern Villa is a contemporary absolutely new project for a residence built from scratch.
        <br/>The project was started from zero, and the house was built from starting from the fundaments in a piece of land.
        <br/>The Villa is located in the outskirts of Kiev, in the heart of peaceful and relaxing Konca Zaspa district, very well-known exclusive green area far from the chaotic Capital city.
      </p>
      <p className="main-text">
        The exclusive materials and design solutions, all reflected the very straight request from the Property, that was looking to build a Villa in accordance with the latest European trends related to architectural solutions, design, and selection of specific materials.
        <br/>Developed in a total area of 620m2 all in one single level, specific request from the Owner, with the SPA and home cinema room at lower level (120 m2) and an additional 70 m2 of external covered veranda, the villa was surrounded also by 10 hectares of green landscape.
      </p>
      <p className="main-text">
        Key elements of the projects were the realization of special suspended ceilings, each one different for each one of the mains rooms. That brought our studio to work with unexpected challenging materials, like suspended back-lit solid wood panels, suspended MDF lacquered panels, up to the use of 3d-shaped gypsum-fiber panels in the Living Room, the pulsating heart of the house.
      </p>
      <p className="main-text">
        Also the solutions adopted for the rest of the furniture was the result of a long search of unique and brand-new materials, developed in almost two years of work in strict contact with the Client, that helped us in every single phase.
      </p>
      <p className="main-text">
        Special floors made in crocodile-leather tiles were combined with an elegant use of four main marbles in the whole house: straight and clean Nero Marquinia and Bianco Carrara lines for all the main corridor paving and Main Entrance. Emperador Dark floor for the sleeping rooms.
        <br/>Silver Wave grey marble and white apuano for the walls in the restrooms.
        <br/>And finally wavy pattern of Nero Marquinia and White Apuano special tiles for the SPA area.
      </p>
      <p className="main-text">
        For the walls and soft furniture upholstery, the focus was put on Nabuk leather.
        <br/>All walls were finished with decorative plaster also reproducing the shape in some rooms of crocodile texture.
      </p>

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>


    </Box>      
  )
};

export default LuxuryVilla;