import React from "react";

import {
  Grid,
} from '@mui/material/';

import {URL} from '../config'
import PressItem from "../component/PressItem";

// content images
import hl_12_2021 from '../public/assets/press/hl_12-2021.jpg'
import ft_11_2020 from '../public/assets/press/ft_11-2020.jpg'
import kozin from '../public/assets/press/kozin.jpg'
import MandarinMaison from '../public/assets/press/Mandarin-Maison.jpg'
import sim from '../public/assets/press/sim.jpg'
import i07_2019 from '../public/assets/press/07_2019.jpg'
import grandYachtShow from '../public/assets/press/grand-yacht-show.jpg'
import hl from '../public/assets/press/hl.jpg'
import Standart from '../public/assets/press/Standart-MAG_SL.jpg'
import interiors from '../public/assets/press/interiors.jpg'

const Press = () => {
  
  const press = [
    {
      title:  'Interiors',
      date:   '10/2024',
      img:    interiors,
      link:   `${URL}press/interiors`
    },
    {
      title:  'High Life',
      date:   '12/2021',
      img:    hl_12_2021,
      link:   "https://issuu.com/vadimkaplan/docs/zn_73_web"
    },
    {
      title:  'FINANCIAL TIMES',
      date:   '11/2020',
      img:    ft_11_2020,
      link:   "#"
    },
    {
      title:  'High Life',
      date:   '11/2019',
      img:    kozin,
      link:   "https://issuu.com/vadimkaplan/docs/web_zn_72/8"
    },
    {
      title:  'Mandarin Maison',
      date:   '11/2019',
      img:    MandarinMaison,
      link:   "https://online.anyflip.com/ufeze/rlsg/index.html"
    },
    {
      title:  'Сhannel 33 & HIGH LIFE',
      date:   '06/2019',
      img:    sim,
      link:   "#"
    },
    {
      title:  'High Life Grand Yacht Show — JetSetter',
      date:   '07/2019',
      img:    i07_2019,
      link:   "https://jetsetter.ua/event/grand-yacht-show-vid-klubu-high-life/"
    },
    {
      title:  'Grand Yacht Show',
      date:   '07/2019',
      img:    grandYachtShow,
      link:   "http://royaldesign.ua/ru/grand-yacht-show-pervoe-kontseptualnoe-meropriyatie-ot-high-life-club.bXn6v/"
    },
    {
      title:  'High Life',
      date:   '07/2019',
      img:    hl,
      link:   "https://issuu.com/vadimkaplan/docs/web_zagorod_final_71-2"
    },
    {
      title:  'Standard',
      date:   '03/2019',
      img:    Standart,
      link:   "https://www.yumpu.com/xx/embed/view/Cgo5I7nePXH9DTJU"
    },
  ]

  return(
    <div id="press">
      <div style={{ height:'160px', width:'100%' }}></div>
      <div className="container" style={{ textAlign:"center" }}>
        <h2>{'Press'}</h2>
        <Grid container spacing={4}>
          {press.map(pressItem => {return(
            <PressItem pressItem = {pressItem} />
          )})}
        </Grid>
      </div>
    </div>
  )
};

export default Press;