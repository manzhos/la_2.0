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
for (let i=1; i<=14; i++) {
  Images[i] = require(`../../public/assets/portfolio/stolichni/stolichni_${i}.jpg`)
}
Images.map((image, key)=>{
  itemData.push({ src: image, title: `stolichni_${key}` })
})

const Stolichni = () => {  
  // const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(-1);

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Stolichni</h2>
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
        The Ukrinvest Headquarters, located in the very center of Donetsk, was a project developed by our Studio as sub-contracting agent of the General Contractor (AK Engineering Ltd.)
        <br/>
        Seven total levels of office space, each floor around 450m² for a total of 3.000 m²
        <br/>
        The external fasade was completely re-designed and developed using “Jerusalem” limestone, coming from the Israel.
      </p>
      <p className="main-text">
        Our designers and engineers formed a strong team with the GC engineers and worked hard on the external fasade project.
        <br/>
        One of the peculiarity of the project, was the fact that any single piece required, was installed on a revolutionary anchoring system that gave the possibility to have: fully ventilated façade (minimum distance from concrete was 200mm, maximum 650mm), and also the possibility to remove each individual piece, in case of breakages or damages, without the necessity to remove or break anything – simply sliding out the required stone.
        <br/>
        With this tip-on/tip-off system, the stone was pre-installed on aluminium railings.
        <br/>
        A full study about anchoring systems in stainless steel was also developed by our engineers in Italy, and dry tests were carried on the job site prior to the installation of the stone.
        <br/>
        The total material for the external façade installed weight was 335 tons – 10 full trucks of material was shipped from Italy.
      </p>
      <p className="main-text">
        As for the internal works, we fully developed the design of the Entrance floor and the Executive Level offices, 7th floor. A deep selection of Italian marbles was provided, fully re-design of each room, supply and installation of marbles as: Breccia Pernice, Emperador Light, Emperador Dark, Giallo Siena, Nero Portoro, Rosso Alicante, Rosa Mirage.
      </p>

      <div className="spacing-36">&nbsp;</div>
      <div style={{ width:"100%", textAlign:"center"}}>
        <a href="/portfolio" className="main-button">BACK TO PORTFOLIO</a>
      </div>

    </Box>      
  )
};

export default Stolichni;