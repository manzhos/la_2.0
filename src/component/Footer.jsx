import React, { Fragment } from 'react';
import { theme } from './Theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';

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
      <div className="container">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}> 
            <p className='footer-text'>
              All you have to do is contact us in any convenient way and your project will begin to be implemented.
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
        </Grid>
      </div>	


      <div className="spacing-96">&nbsp;</div>
    </Fragment>
  );
};

export default Footer;