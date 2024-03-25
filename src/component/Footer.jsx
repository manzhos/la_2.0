import React, { Fragment } from 'react';
import { theme } from './Theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import ig   from '../public/assets/social_networks/ig.png';
import pint from '../public/assets/social_networks/pint.png';
import fb   from '../public/assets/social_networks/fb.png';
import yt   from '../public/assets/social_networks/yt.png';

const Footer = () => {
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm')),
        heightHeader = { height:'160px' };
  if(isMobileMode) heightHeader.height = '100px';

  const currentYear = new Date().getFullYear();

  return (
    <Fragment>
      <div className="spacing-96">&nbsp;</div>
      <div id="FooterMenuContainer" className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
          <a className="menu-link"      label="Home"          href="/">FAQ</a>
          <a className="menu-link"      label="About"         href="/about">SERVICES</a>
          <a className="menu-link"      label="Services"      href="/services">PRESS & ARTICLES</a>
          <a className="menu-link"      label="Portfolio"     href="/portfolio">MEDIA & DOWNLOAD</a>
          <a className="menu-link"      label="Press"         href="/press">TESTIMONIALS</a>
          <a className="menu-link"      label="FAQs"          href="/faqs">CONTACTS</a>
      </div>				

      <div className="spacing-96">&nbsp;</div>

      <div id="social" style={{ width: "360px", margin: "0px auto", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <a href="#">
          <img src={ig} style={{ width: "35px", height: "35px" }}/>
        </a>
        <a href="#">
          <img src={fb} style={{ width: "35px", height: "35px" }}/>
        </a>
        <a href="#">
          <svg height="35px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
          </svg>
        </a>
      </div>

      <div className="spacing-96">&nbsp;</div>
      <div className="container">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}> 
            <p className='footer-text'>
              <b>Contemporary luxury interiors that are design forward and support the way you live.</b>
            </p>
            <p className='footer-text'>
              <a href="callto:393896030634" style={{ color: "#464643" }}>+39 389 603 06 34</a> | <a href="mailto:info@lazzarottiassociati.com" style={{ color: "#464643" }}>info@lazzarottiassociati.com</a>
            </p>
            <p className='footer-text'>
              GRAND HALL. Forte dei Marmi (LU). Via T. D’Aquino 18/a 55042, ITALY
            </p>
            <p className='footer-text'>
              Lazzarotti & Associati Architects © {currentYear}
            </p>
          </Grid>
          <Grid item xs={12} sm={6} style={{ display: "flex", alignItems: "end", justifyContent: "end" }}>
            <a href="#to_top" className='footer-text' style={{ color: "#464643" }}>
              Back to top&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowUp} style={{ height: "14px", paddingTop: "2px" }} />
            </a>
          </Grid>
        </Grid>
      </div>	

      <div className="spacing-96">&nbsp;</div>
    </Fragment>
  );
};

export default Footer;