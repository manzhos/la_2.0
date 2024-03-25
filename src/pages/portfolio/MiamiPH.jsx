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
import img01  from '../../public/assets/portfolio/miami_ph/Miami-PH-1.jpg'
import img02  from '../../public/assets/portfolio/miami_ph/Miami-PH-2.jpg'
import img03  from '../../public/assets/portfolio/miami_ph/Miami-PH-3.jpg'
import img04  from '../../public/assets/portfolio/miami_ph/Miami-PH-4.jpg'
import img05  from '../../public/assets/portfolio/miami_ph/Miami-PH-5.jpg'
import img06  from '../../public/assets/portfolio/miami_ph/Miami-PH-6.jpg'
import img07  from '../../public/assets/portfolio/miami_ph/Miami-PH-7.jpg'
import img07a from '../../public/assets/portfolio/miami_ph/Miami-PH-7a.jpg'
import img07b from '../../public/assets/portfolio/miami_ph/Miami-PH-7B.jpg'
import img07c from '../../public/assets/portfolio/miami_ph/Miami-PH-7C.jpg'
import img08  from '../../public/assets/portfolio/miami_ph/Miami-PH-8.jpg'
import img09  from '../../public/assets/portfolio/miami_ph/Miami-PH-9.jpg'
import img10  from '../../public/assets/portfolio/miami_ph/Miami-PH-10.jpg'
import img11  from '../../public/assets/portfolio/miami_ph/Miami-PH-11.jpg'
import img12  from '../../public/assets/portfolio/miami_ph/Miami-PH-12.jpg'
import img13  from '../../public/assets/portfolio/miami_ph/Miami-PH-13.jpg'
import img14  from '../../public/assets/portfolio/miami_ph/Miami-PH-14.jpg'
import img15  from '../../public/assets/portfolio/miami_ph/Miami-PH-15.jpg'
import img16  from '../../public/assets/portfolio/miami_ph/Miami-PH-16.jpg'
import img17  from '../../public/assets/portfolio/miami_ph/Miami-PH-17.jpg'
import img18  from '../../public/assets/portfolio/miami_ph/PH-18-cocktail-table.jpg'
import img19  from '../../public/assets/portfolio/miami_ph/PH-19-breakfast-table-.jpg'
import img20  from '../../public/assets/portfolio/miami_ph/PH-20-Sofa-detail.jpg'

const itemData = [
  {
    src: img01,
    title: 'miami_ph_01',
  },
  {
    src: img02,
    title: 'miami_ph_02',
  },
  {
    src: img03,
    title: 'miami_ph_03',
  },
  {
    src: img04,
    title: 'miami_ph_04',
  },
  {
    src: img05,
    title: 'miami_ph_05',
  },
  {
    src: img06,
    title: 'miami_ph_06',
  },
  {
    src: img07,
    title: 'miami_ph_07',
  },
  {
    src: img07a,
    title: 'miami_ph_07a',
  },
  {
    src: img07b,
    title: 'miami_ph_07b',
  },
  {
    src: img07c,
    title: 'miami_ph_07c',
  },
  {
    src: img08,
    title: 'miami_ph_08',
  },
  {
    src: img09,
    title: 'miami_ph_09',
  },
  {
    src: img10,
    title: 'miami_ph_10',
  },
  {
    src: img11,
    title: 'miami_ph_11',
  },
  {
    src: img12,
    title: 'miami_ph_12',
  },
  {
    src: img13,
    title: 'miami_ph_13',
  },
  {
    src: img14,
    title: 'miami_ph_14',
  },
  {
    src: img15,
    title: 'miami_ph_15',
  },
  {
    src: img16,
    title: 'miami_ph_16',
  },
  {
    src: img17,
    title: 'miami_ph_17',
  },
  {
    src: img18,
    title: 'miami_ph_18',
  },

];

const MiamiPH = () => {
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Coral Gables Miami Penthouse</h2>
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
        For the Coral Gables Miami Penthouse new design, our interior design studio has envisioned a primary open-space area connecting the Living Room with the Kitchen, full of  aesthetics and contemporary elegance. The space becomes not just a kitchen; it's a new luxury concept of open glass elements showcasing interiors, where new design trends applied to the kitchen meets modern sophistication and luxury.
      </p>
      <p className="main-text">
        Embracing a palette of beige and grey neutral tones,modern molding and millwork enfold the space, creating a cocoon of warmth and richness. Dramatic and bold, the double island of the kitchen sculpted from natural grey marble, commands attention with its distinct shape and texture. This project is a theatrical display of design, pushing boundaries and redefining luxury in a show house setting.
      </p>
      <p className="main-text">
        The double-deck sofa, facing both the kitchen and the TV zone, embroidered in soft cashmere leather provides further more the necessary warmth and style to the rest of the habitable space developed around.
      </p>

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>


    </Box>      
  )
};

export default MiamiPH;