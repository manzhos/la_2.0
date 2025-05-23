import React from "react";
import { useNavigate } from 'react-router-dom';

import {
  Grid,
  Button
} from '@mui/material/';

import {URL} from '../config'


const Download = () => {
  const navigate  = useNavigate()

  const downloadSpecs = () => {
    window.top.location = `${URL}/assets/downloads/specs.pdf`
  }

  const downloadBrochure = () => {
    window.top.location = `${URL}/assets/downloads/Lazzarotti_brochure.pdf`
  }

  const downloadPortfolio = () => {
    window.top.location = `${URL}/assets/downloads/Portfolio.pdf`
  }

  const showPortfolio = () => {
    window.top.location = `${URL}portfolio_pdf`
  }

  return(
    <div id="press">
      <div style={{ height:'160px', width:'100%' }}></div>
      <div className="container" style={{ textAlign:"center" }}>
        <div className="spacing-64">&nbsp;</div>
        <h2>{'Download'}</h2>
        <hr/>
        <div className="spacing-48">&nbsp;</div>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <h1>{'BROCHURE'}</h1>
            <Button onClick={downloadBrochure}>Download</Button>
          </Grid>
          <Grid item xs={12} sm={4} style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
            <h1>{'PORTFOLIO'}</h1>
            <Button onClick={showPortfolio}>View online</Button>
            <Button onClick={downloadPortfolio}>Download</Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h1>{'SPECS'}</h1>
            <Button onClick={downloadSpecs}>Download</Button>
          </Grid>
        </Grid>
        <div className="spacing-48">&nbsp;</div>
        <hr/>
        <div className="spacing-48">&nbsp;</div>
      </div>
    </div>
  )
};

export default Download;