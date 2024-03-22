import React from "react";
import { theme } from '../component/Theme';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
  // const mainVideo = '../public/assets/main.mp4';
  const mainVideo = 'https://lazzarottiassociati.com/wp-content/uploads/2022/10/Busov.mp4';
  
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

  return(
    <div id="home">
      {!isMobileMode &&
        <>
          <div style={{ height:'160px', width:'100%' }}></div>
          <div className="main-video" style={{ backgroundColor: 'gray' }}>
            {/* <video style={{ width: '100%' }} autoplay="autoplay" loop="loop" playsinline="" muted="muted">
                <source src={mainVideo} type="video/mp4" />
            </video> */}
          </div>
        </>
      }
    </div>
  )
};

export default Home;