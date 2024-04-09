import React from "react";
import Lightbox from "yet-another-react-lightbox"; // https://yet-another-react-lightbox.com/

import {
  Box,
  ImageList,
  ImageListItem,
} from '@mui/material/';

import "yet-another-react-lightbox/styles.css";

// content images
import img01 from '../../public/assets/portfolio/kadima_resort/exteriors/1.jpg'
import img02 from '../../public/assets/portfolio/kadima_resort/exteriors/2.jpg'
import img03 from '../../public/assets/portfolio/kadima_resort/exteriors/3.jpg'
import img04 from '../../public/assets/portfolio/kadima_resort/exteriors/4.jpg'
import img05 from '../../public/assets/portfolio/kadima_resort/exteriors/5.jpg'
import img06 from '../../public/assets/portfolio/kadima_resort/exteriors/6.jpg'
import img07 from '../../public/assets/portfolio/kadima_resort/exteriors/7.jpg'
import img08 from '../../public/assets/portfolio/kadima_resort/exteriors/8.jpg'
import img09 from '../../public/assets/portfolio/kadima_resort/exteriors/9.jpg'
import img10 from '../../public/assets/portfolio/kadima_resort/exteriors/10.jpg'
import img11 from '../../public/assets/portfolio/kadima_resort/exteriors/11.jpg'
import img12 from '../../public/assets/portfolio/kadima_resort/exteriors/12.jpg'
import img13 from '../../public/assets/portfolio/kadima_resort/exteriors/13.jpg'
import img14 from '../../public/assets/portfolio/kadima_resort/exteriors/14.jpg'
import img15 from '../../public/assets/portfolio/kadima_resort/exteriors/15.jpg'
import img16 from '../../public/assets/portfolio/kadima_resort/exteriors/16.jpg'
import img17 from '../../public/assets/portfolio/kadima_resort/exteriors/17.jpg'
import img18 from '../../public/assets/portfolio/kadima_resort/exteriors/18.jpg'
import img19 from '../../public/assets/portfolio/kadima_resort/exteriors/19.jpg'
import img20 from '../../public/assets/portfolio/kadima_resort/exteriors/20.jpg'
import img21 from '../../public/assets/portfolio/kadima_resort/exteriors/21.jpg'
import img22 from '../../public/assets/portfolio/kadima_resort/exteriors/22.jpg'
import img23 from '../../public/assets/portfolio/kadima_resort/exteriors/23.jpg'
import img24 from '../../public/assets/portfolio/kadima_resort/exteriors/24.jpg'
import img25 from '../../public/assets/portfolio/kadima_resort/exteriors/25.jpg'
import img26 from '../../public/assets/portfolio/kadima_resort/exteriors/26.jpg'
import img27 from '../../public/assets/portfolio/kadima_resort/exteriors/27.jpg'
import img28 from '../../public/assets/portfolio/kadima_resort/exteriors/28.jpg'
import img29 from '../../public/assets/portfolio/kadima_resort/exteriors/29.jpg'
import img30 from '../../public/assets/portfolio/kadima_resort/exteriors/30.jpg'
import img31 from '../../public/assets/portfolio/kadima_resort/exteriors/31.jpg'
import img32 from '../../public/assets/portfolio/kadima_resort/exteriors/32.jpg'
import img33 from '../../public/assets/portfolio/kadima_resort/exteriors/33.jpg'
import img34 from '../../public/assets/portfolio/kadima_resort/exteriors/34.jpg'
import img35 from '../../public/assets/portfolio/kadima_resort/exteriors/35.jpg'
import img36 from '../../public/assets/portfolio/kadima_resort/exteriors/36.jpg'
import img37 from '../../public/assets/portfolio/kadima_resort/exteriors/37.jpg'
import img38 from '../../public/assets/portfolio/kadima_resort/exteriors/38.jpg'
import img39 from '../../public/assets/portfolio/kadima_resort/exteriors/39.jpg'
import img40 from '../../public/assets/portfolio/kadima_resort/exteriors/40.jpg'

const itemData = [
  { src: img01, title: 'kadima_resort_exterior_01', },
  { src: img02, title: 'kadima_resort_exterior_02', },
  { src: img03, title: 'kadima_resort_exterior_03', },
  { src: img04, title: 'kadima_resort_exterior_04', },
  { src: img05, title: 'kadima_resort_exterior_05', },
  { src: img06, title: 'kadima_resort_exterior_06', },
  { src: img07, title: 'kadima_resort_exterior_07', },
  { src: img08, title: 'kadima_resort_exterior_08', },
  { src: img09, title: 'kadima_resort_exterior_09', },
  { src: img10, title: 'kadima_resort_exterior_10', },
  { src: img11, title: 'kadima_resort_exterior_11', },
  { src: img12, title: 'kadima_resort_exterior_12', },
  { src: img13, title: 'kadima_resort_exterior_13', },
  { src: img14, title: 'kadima_resort_exterior_14', },
  { src: img15, title: 'kadima_resort_exterior_15', },
  { src: img16, title: 'kadima_resort_exterior_16', },
  { src: img17, title: 'kadima_resort_exterior_17', },
  { src: img18, title: 'kadima_resort_exterior_18', },
  { src: img19, title: 'kadima_resort_exterior_19', },
  { src: img20, title: 'kadima_resort_exterior_20', },
  { src: img21, title: 'kadima_resort_exterior_21', },
  { src: img22, title: 'kadima_resort_exterior_22', },
  { src: img23, title: 'kadima_resort_exterior_23', },
  { src: img24, title: 'kadima_resort_exterior_24', },
  { src: img25, title: 'kadima_resort_exterior_25', },
  { src: img26, title: 'kadima_resort_exterior_26', },
  { src: img27, title: 'kadima_resort_exterior_27', },
  { src: img28, title: 'kadima_resort_exterior_28', },
  { src: img29, title: 'kadima_resort_exterior_29', },
  { src: img30, title: 'kadima_resort_exterior_30', },
  { src: img31, title: 'kadima_resort_exterior_31', },
  { src: img32, title: 'kadima_resort_exterior_32', },
  { src: img33, title: 'kadima_resort_exterior_33', },
  { src: img34, title: 'kadima_resort_exterior_34', },
  { src: img35, title: 'kadima_resort_exterior_35', },
  { src: img36, title: 'kadima_resort_exterior_36', },
  { src: img37, title: 'kadima_resort_exterior_37', },
  { src: img38, title: 'kadima_resort_exterior_38', },
  { src: img39, title: 'kadima_resort_exterior_39', },
  { src: img40, title: 'kadima_resort_exterior_40', },
];

const KadimaResort = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Kadima Lakeview Resort</h2>
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
        Kadima Lakeview Resort, outside Johannesburg, South Africa is the result of a unique transformation first of all of the external façade and renovated landscape design of the property.
      </p>
      <p className="main-text">
        The heart of this project lies in the external terraces and fully-equipped Rooftop Bar, where we embarked on a design endeavor that would leave anyone speechless. 
      </p>
      <p className="main-text">
        By opening up all the numerous patios and terraces, we created a magnificent interconnection between inside and outside that floods the space with natural light and offers a breathtaking view of the picturesque surroundings. 
      </p>
      <p className="main-text">
        This project is not just about aesthetics; it's about pushing the boundaries of design and showcasing the possibilities. By curating an out-of-the-box approach, we bring texture and depth to the space, employing different materials and original applications. The layered design achieved through repeated use of the same material in various forms, shapes, and locations demonstrates that unexpected elements can create breathtaking results.
      </p>
      <p className="main-text">
        In conclusion, this extremely tasteful lux project in South Africa  is an extraordinary example of a full gut remodel that has surpassed all expectations. The meticulous attention to detail, the masterful use of materials, and the seamless blend of functionality and aesthetics create an unforgettable space. It serves as a testament to the power of design and the transformative impact it can have on a home and its inhabitants.
      </p>
      <p className="main-text">
        We highly recommend to have a look also at the Main Interiors of the Resort, in order to guide you through the other unique solutions adopted in the project.
      </p>

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio/kadima_resort/interior" className="main-button">Look at the INTERIORS</a>
      </div>
      <div className="spacing-64">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>


    </Box>      
  )
};

export default KadimaResort;