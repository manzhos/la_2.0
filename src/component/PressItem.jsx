import React from "react";

import {
  Grid,
} from '@mui/material/';

const PressItem = ({pressItem}) => {
  return(
    <Grid item  xs={6} sm={3}>
      <h1>{pressItem.title}</h1>
      <a href={pressItem.link} target="_blank">
        <img src={pressItem.img} style={{ width:"100%" }}/>
      </a>
    </Grid>
  )
}

export default PressItem