import React from "react";
import { useNavigate } from 'react-router-dom';

import {
  Box,
  ImageList,
  ImageListItem,
} from '@mui/material/';


import miami_ph       from '../public/assets/portfolio/miami_ph.jpg'
import luxury_villa   from '../public/assets/portfolio/luxury_villa.jpg'
import kadima_resort  from '../public/assets/portfolio/kadima_resort.jpg'
import rv_87          from '../public/assets/portfolio/rv_87.jpg'
import tt_307          from '../public/assets/portfolio/tt_307.jpg'
import amb_vie          from '../public/assets/portfolio/amb_vie.jpg'

const itemData = [
  { src: miami_ph,      title: 'Coral Gables Miami Penthouse',        path: '/portfolio/miami_ph'},
  { src: luxury_villa,  title: 'Luxury Modern Villa',                 path: '/portfolio/luxury_villa'},
  { src: kadima_resort, title: 'Kadima Lakeview Resort',              path: '/portfolio/kadima_resort'},
  { src: rv_87,         title: 'RIVIERA CONTEMPORARY LUXURY VILLA',   path: '/portfolio/rv_87'},
  { src: tt_307,        title: 'Luxury modern Penthouse',             path: '/portfolio/tt_307'},
  { src: amb_vie,       title: 'THE AMBASSY WIEN GLAMOUR PENTHOUSE',  path: '/portfolio/amb_vie'},
];

const Portfolio = () => {
  const navigate  = useNavigate();

  return(
    <Box className="container">
      <div className="spacing-128">&nbsp;</div>
      <div className="spacing-96">&nbsp;</div>
      <h2 style={{ textAlign:"center" }}>Portfolio</h2>
      <ImageList variant="standard" cols={3}>
        {itemData.map((item, key) => (
          <ImageListItem  style={{ cursor:"pointer" }} onClick={()=>{navigate(item.path)}}>
              <img
                srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <h4>{item.title}</h4>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>      
  )
};

export default Portfolio;