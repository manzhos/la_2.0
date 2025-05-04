import React, { useEffect, useRef } from "react";
// import * as pdfjsLib from 'pdf-dist';
// import { PageFlip } from 'page-flip';

import {URL} from '../../config'
import Flipbook from '../../component/Flipbook';

const Interiors = () => {
  const pdfUrl = `${URL}assets/press/Interiors.pdf`;

  return(
    <div id="Interiors">
      <div style={{ height:'160px', width:'100%' }}></div>
      <div className="container" style={{ textAlign:"center" }}>
        <div className="spacing-64">&nbsp;</div>
        <h2>{'INTERIORS'}</h2>
        <hr/>
        <div className="spacing-48">&nbsp;</div>
        <Flipbook pdfUrl={pdfUrl} />
        <div className="spacing-48">&nbsp;</div>
        <hr/>
        <div className="spacing-48">&nbsp;</div>
      </div>
    </div>
  )
};

export default Interiors;