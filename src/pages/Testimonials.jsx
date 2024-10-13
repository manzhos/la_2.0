import React from "react";
import { theme } from '../component/Theme';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  Grid,
} from '@mui/material/';
// content images
import gr01 from '../public/assets/glowing_remarks/gr01.jpg'
import gr02 from '../public/assets/glowing_remarks/gr02.jpg'
import gr03 from '../public/assets/glowing_remarks/gr03.jpg'

const Testimonials = () => {
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  return(
    <div id="testimonials">
      <div className="container">
        <hr style={{ color:"#464643", backgroundColor: "#464643" }}/>
        <div className="spacing-64">&nbsp;</div>
        <h2 style={{ textAlign:"center" }}>GLOWING REMARKS</h2>
        <div className="spacing-24">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <img src={gr01} className="f-work-main" alt="" />
            <h4>RIVIERA CONTEMPORARY LUXURY VILLA</h4>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>Konstantin Gumeniok</h2>
            <p className="main-text">
              We could not be happier with our experience with design studio Lazzarotti & Associati. Simone and his team were able to transform our house into a beautiful home that is warm, inviting, comfortable, and stunningly beautiful! When we first purchased the land, we knew it had great potential and vision in our minds, but had no idea where to start. From our first meeting with Simone, we knew we had selected the right team to work with. They were able to translate our ideas and inspiration images into a home that is above and beyond what we had thought possible.
            </p>
            <a href="/portfolio/rv_87" className="view-more">View more</a>
          </Grid>
        </Grid>

        <div className="spacing-64">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <img src={gr02} className="f-work-main" />
            <h4>Luxury modern Penthouse</h4>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>MAURICE BEAUMOND</h2>
            <p className="main-text">
              I had a great experience working with Simon and the rest of the  Design team to furnish my entire new Penthouse. This was a BIG job and they handled every detail beautifully. I spoke with them about my vision for the style and they took the reins from there. They did an excellent job of giving me just the right amount of options, so I did not get hindered by too many choices. I thought they were very straightforward about their fees and were respectful of our established budget. They handled all of the logistics which made the whole process stress-free for me. The best part was the big reveal! I would most definitely recommend Lazzarotti & Associati Architects and would love to work with them again in my future projects!
            </p>
            <a href="/portfolio/tt_307" className="view-more">View more</a>
          </Grid>
        </Grid>

        <div className="spacing-64">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <img src={gr03} className="f-work-main" />
            <h4>THE AMBASSY WIEN GLAMOUR PENTHOUSE</h4>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>ALEKSANDRA TERESENKO</h2>
            <p className="main-text">
              All I can say is WOW. The Lazzarotti Associati design team is truly magical. There are just no other words. I hired them for their full-service design work to help me furnish my entire Penthouse. We moved from Miami to Vienna and needed all new furniture as well as paint, wallpaper, draperies, and lighting. The result was truly fantastic and the process was extremely professional! Working with these people made me feel special and they really understood my style and paid very close attention to how I wanted to use each room and what was important to me. Everyone who has seen my property since has been truly impressed. And the biggest compliment I received was "it feels like a home like a happy family lives here". Simone and the team chose pieces that are truly timeless and really appreciate the character of my new contemporary/clean design aesthetic. Not only is everything beautiful, the rooms are functional and are conducive to everyday living and you know the furniture will last. The team thought about every single detail from big chandeliers to little plants and decor on the shelves and we absolutely love our new home. I can't wait to hire them again when we do our next renovation project. Truly spectacular from start to finish - can't say enough good things. Hire them NOW!
            </p>
            <a href="/portfolio/amb_vie" className="view-more">View more</a>
          </Grid>
        </Grid>
      </div>
    </div>
  )
};

export default Testimonials;