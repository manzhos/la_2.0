import React, { useEffect, useRef } from "react";
import * as pdfjsLib from 'pdfjs-dist';
import { PageFlip } from 'page-flip';

import '../utils/pdfWorker';

const Flipbook = ({ pdfUrl }) => {
    const flipbookEl = useRef(null);
    const pageFlipRef = useRef(null);
    // console.log('pdfUrl:', pdfUrl);
  
    useEffect(() => {
      const loadPDF = async () => {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        // console.log('pdf:', pdf);
        const pages = [];
  
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
  
          const viewport = page.getViewport({ scale: 2 });
          canvas.width = viewport.width;
          canvas.height = viewport.height;
  
          await page.render({ canvasContext: context, viewport }).promise;
          const img = document.createElement('img');
          img.src = canvas.toDataURL();
          img.style.width = '100%';
  
          const pageWrapper = document.createElement('div');
          pageWrapper.classList.add('page');
          pageWrapper.appendChild(img);
          pages.push(pageWrapper);
        }
  
        const pageFlip = new PageFlip(flipbookEl.current, {
          width: 600,
          height: 800,
          size: 'stretch',
          minWidth: 315,
          maxWidth: 1000,
          minHeight: 400,
          maxHeight: 1350,
          maxShadowOpacity: 0.5,
          showCover: false,
          mobileScrollSupport: false,
        });
  
        pageFlip.loadFromHTML(pages);
        pageFlipRef.current = pageFlip;
      };
  
      loadPDF();
    }, [pdfUrl]);
  
    return (
        <div ref={flipbookEl} className="flipbook" />
    );
  };
  
  export default Flipbook;