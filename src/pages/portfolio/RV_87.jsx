import React from "react";
import Lightbox from "yet-another-react-lightbox"; // https://yet-another-react-lightbox.com/

import {
  Box,
  ImageList,
  ImageListItem,
} from '@mui/material/';

import "yet-another-react-lightbox/styles.css";

import rv_video from '../../public/assets/portfolio/rv_87/rv_87_movie.mp4'

// content images
const Images    = [],
      itemData  = [];
for (let i=1; i<=179; i++) {
  Images[i] = require(`../../public/assets/portfolio/rv_87/rv_87_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `rv_87_${key}` })
})

const RV_87 = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>RIVIERA CONTEMPORARY LUXURY VILLA</h2>
      <div className="spacing-24">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <video style={{ width: '50%' }} controls loop="loop" playsinline="" muted="muted" autoPlay>
            <source src={rv_video} type="video/mp4" />
        </video>
      </div>
      <div className="spacing-24">&nbsp;</div>
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
        Nestled within the tranquil, tree-lined enclave of Riviera Village luxury Home Rerteat, Kiev Region, this exquisite residence exemplifies our design team's prowess in crafting sophisticated, functional, and captivating living spaces tailored to the unique requirements of a modern family. This new completely built from scratch project gave us the opportunity to showcase the best of our style. Drawing inspiration from relaxed yet intricated contemporary aesthetics, clean lines, and a neutral color palette punctuated with thoughtful use color, we have created a refined sanctuary for the family to relish and entertain.
      </p>
      <p className="main-text">
        The design ethos behind this project stems from the clients' affinity for relaxed modern elegance, incorporating elements of o materials, contrasting textures, and highly customized wow moments. The result is a harmonious interplay of form, scale, and functionality, bespoke to the family's specific desires.
      </p>
      <p className="main-text">
        Some of the standout rooms and design elements within the project include:
      </p>
      <p className="main-text">
        Living Room: The meticulously selected tunnel fireplace boasts a stunning Italian Onyx back-lit wall feature, and a contrasting modern ceiling all above, providing a striking focal point. Complemented by a textured credenza with woven wood doors and minimal floating shelves, the living room exudes an aura of warmth and sophistication. The matching custom high performance sofas were not only uniquely designed to fit like a glove in this room but withstand heavy use from both kids and pets.
      </p>
      <p className="main-text">
        Cabinet: This sun-drenched space features a breathtaking library/display built-in, crafted from European white oak with contrasting black dividers. Designed as a cozy reading nook, it adds depth and visual interest to the open-plan living area.
      </p>
      <p className="main-text">
        Dining Room: The natural wood tone table serves as a statement piece, juxtaposed against contrasting dark chairs and a dark custom accent ledge/wall design, culminating in a well-balanced and alluring dining space.
      </p>
      <p className="main-text">
        Master Bedroom: the sophisticated wall panels interconnected in contrast with a 3D marble wall, as well as the selection of the soft furniture and the TV wall shelves, create an all-in-one warm and embracing spacious room that invites you to lay down and relax.
      </p>
      <p className="main-text">
        Master Walk-in Closet: This beautiful modern walk-in closet with leather textures installed on the walls and on the door, as well as on some of the shelves is the final result of a customized design made in strict cooperation with our Italian furniture supplier.
      </p>
      <p className="main-text">
        This beautiful interior design project and renovation in Kiev Region, Ukraine, serves as a testament to our unwavering commitment to crafting spaces that are both functional and visually arresting. By focusing on high levels of intentionality and customization, we have transformed this family home into an inviting, modern, and inspiring haven.
      </p>

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>


    </Box>      
  )
};

export default RV_87;