import React from "react";

import {
  Grid,
} from '@mui/material/';

import mainFaq from '../public/assets/pages/faq/main_faq.jpg'

const FAQ = () => {
  return(
    <>
      <div className="container">
        <div style={{ height:'180px', width:'100%' }}></div>
        <div className="main-img">
          <img src={mainFaq} />
        </div>
      </div>
      {/* } */}
      <div className="spacing-36">&nbsp;</div>
      <div className="container">
        <h5>
          12 MOST COMMONLY ASKED INTERIOR DESIGN QUESTIONS
        </h5>
        <p className="main-text">
          Here are the frequently asked questions for interior design from when to hire a designer, to what does the process look like, to how in the world to build a realistic remodel budget…
        </p>
      </div>

      <div className="container">
        <div className="spacing-48">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={1}>
            <h2>01</h2>
          </Grid>
          <Grid item xs={10} sm={11}>
            <h3>WHEN SHOULD I HIRE A DESIGNER? WE WILL MEET OR HAVE A ZOOM CALL TO GO OVER THE DETAILS?</h3>
            <p className="main-text">We suggest hiring professional designer before or around the time of buying the property in order to receive from us the most efficient support and counseling before taking any decision by yourself, and before it’s too late. Professional designers help Clients in the decisions, enhance the project and work to ensure the end result delivers on your vision. We’re here to guide you and be your advocate throughout the process.</p>
          </Grid>
        </Grid>
  
        <div className="spacing-36">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={1}>
            <h2>02</h2>
          </Grid>
          <Grid item xs={10} sm={11}>
            <h3>WHAT’S THE REASON FOR BRINGING IN A PROFESSIONAL DESIGNER EARLY INTO THE CONSTRUCTION OR DESIGN PROCESS?</h3>
            <p className="main-text">Let’s first look at what happens when you don’t bring in a designer—it’s like making a movie without a director. There’s no one holding the full vision along with its many details and no one sharing information with the team in a way they are used to processing it. With a designer on board, you have someone managing all the decisions and who knows precisely how all of the many pieces of your large project puzzle impact each other. An interior designer takes the big visions with all their small intricacies and orchestrates them to create the home of your dreams.</p>
          </Grid>
        </Grid>
  
        <div className="spacing-36">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={1}>
            <h2>03</h2>
          </Grid>
          <Grid item xs={10} sm={11}>
            <h3>WHAT ROLE DOES A DESIGNER HAVE IN A HOME IMPROVEMENT PROJECT?</h3>
            <p className="main-text">Our interior designers’ team is your unbiased, expert resource – your advocate and liaison between all your various services: architect, contractor, and tradespeople. Lazzarotti & Associati communicates the information on the who, what, where, why, and how of your home to the right parties at the exact, right times of the project.</p>
          </Grid>
        </Grid>
  
        <div className="spacing-36">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={1}>
            <h2>04</h2>
          </Grid>
          <Grid item xs={10} sm={11}>
            <h3>HOW DO I TRANSLATE MY STYLE AND VISION TO AN INTERIOR DESIGNER WHILE ALSO ARTICULATING MY NEEDS?</h3>
            <p className="main-text">So glad you asked! This is one of our SUPER strengths. We take a deep dive into what you love, need, and ultimately obsess over. We’re able to uniquely translate this and give you results nothing short of exceptional! If you crave the unexpected, you are in the right place. To get there, we set up meetings to establish direction through inspirational elements. In those meetings, we ask lots of questions and listen closely to your answers. Your answers tell us so much of who you are, what matters to you, what you love, what’s sentimental, and what you want to express about yourself. After we get to know you, and through detailed consideration, we integrate images that communicate our ideas into a new vision for your home.</p>
          </Grid>
        </Grid>
  
        <div className="spacing-36">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={1}>
            <h2>05</h2>
          </Grid>
          <Grid item xs={10} sm={11}>
            <h3>WHAT IS THE LEAD TIME TO GET BOOKED WITH AN INTERIOR DESIGNER?</h3>
            <p className="main-text">It is typical for Lazzarotti & Associati to book out 2-3 months in advance. And depending on the season, we can be booked out much longer. As mentioned earlier, you want your interior designer on board early in your project. So make us one of your first calls to start the conversation and get on our calendar.</p>
          </Grid>
        </Grid>
  
        <div className="spacing-36">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={1}>
            <h2>06</h2>
          </Grid>
          <Grid item xs={10} sm={11}>
            <h3>HOW MUCH DOES AN INTERIOR DESIGNER COST?</h3>
            <p className="main-text">Lazzarotti & Associati calculates fees and costs based on the scope of work. You will know from start to finish exactly what you will invest in design fees for your home and usually this will be a fixed rate including everything. Our clients love this peace of mind as it is much better than charge an hourly rate.</p>
          </Grid>
        </Grid>
  
        <div className="spacing-36">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={1}>
            <h2>07</h2>
          </Grid>
          <Grid item xs={10} sm={11}>
            <h3>WHAT DOES FULL-SERVICE INTERIOR DESIGN MEAN?</h3>
            <p className="main-text">Full-service at Lazzarotti Associati is entirely turnkey from start to finish. We will create floor plans, design boards, elevations, renderings, and finish samples to bring your design visions to life. You’ll get to see, feel and interact with it all to eliminate the guesswork as to the final product of your home’s transformation. Next, we take care of all the ordering, procurement, site observations, communication with contractors, and finally, installation!</p>
          </Grid>
        </Grid>
  
        <div className="spacing-36">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={1}>
            <h2>08</h2>
          </Grid>
          <Grid item xs={10} sm={11}>
            <h3>WHAT DOES THE “FULL-DESIGN PROJECT” INCLUDE IN THE COST</h3>
            <p className="main-text">Full-design project will be the go-to book, the bible for any question related to the project. This full book will include any single aspect, starting from the technical part with plans, elevations sections and details, moving on to the 3D detailed photorealistic computer visualizations, passing through all the Engineering works connected (electrical, HVAC, plumbing, construction/demolition, floors, walls, ceiling) lighting, detailed specifications of each single item that has to be purchased, and finally a detailed budget cost related to the project. 
              <br/>A sample of our <b>Design Project</b> can be provided in order to show in details what this includes.
            </p>
          </Grid>
        </Grid>
  
        <div className="spacing-36">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={1}>
            <h2>09</h2>
          </Grid>
          <Grid item xs={10} sm={11}>
            <h3>DO YOU HAVE YOUR OWN SPECIFIC STYLE OF PREFERENCE FOR YOUR PROJECTS?</h3>
            <p className="main-text">This is really one of the most common questions asked by Clients. We do NOT have a specific style, and as you can see from our Portfolio, thanks to the many years of expertise our Studio has, we can work easily with any kind of style – this is all up to the Client’s vision – we will always adapt and find the solutions required with no problem, spanning from very classical projects up to the other end of the line ending with super modern lofts or Penthouses.</p>
          </Grid>
        </Grid>
  
        <div className="spacing-36">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={1}>
            <h2>10</h2>
          </Grid>
          <Grid item xs={10} sm={11}>
            <h3>HOW DO YOU BUDGET AN INTERIOR DESIGN PROJECT?</h3>
            <p className="main-text">The budget is where your project’s realistic picture begins, and we won’t start a project without one. The price the Client pays for the DESIGN PROJECT includes a detailed budget spreadsheet for all the different works involved in the process, including site works, engineering, furnishings, accessories, and so on. Your budget is the map that shows us the right lanes to navigate in finding and delivering the best for your home. We will walk through the process of estimating your investment based on our extensive experience with interior design. We guide you through all of this with utmost transparency and design to your budget level. 
              <br/>And most of all, we will adjust the budget according to the Client’s request, finding alternatives and proposing other options when necessary.
            </p>
          </Grid>
        </Grid>
  
        <div className="spacing-36">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={1}>
            <h2>11</h2>
          </Grid>
          <Grid item xs={10} sm={11}>
            <h3>CAN WE FIND ALTERNATIVES TO AN ITEM IN ORDER TO FIND IT FOR LESS MONEY AND LOOK SIMILAR TO WHAT THE DESIGN PLAN SPECIFIED?</h3>
            <p className="main-text">Interior Designing is much like hiring a baker to make a wedding cake. You trust they are buying the highest quality ingredients and mixing, sculpting, and baking it all at the perfect temperatures and will deliver exactly what you budgeted and dreamed of. We are also a service, and part of the magic we deliver is keeping the original intent intact throughout the process. We work tirelessly to ensure all the many moving pieces come together at the exact right moments without sacrificing time, quality, or money. In any case, we will always listen to our Client and we will always provide several options.</p>
          </Grid>
        </Grid>
  
        <div className="spacing-36">&nbsp;</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={1}>
            <h2>12</h2>
          </Grid>
          <Grid item xs={10} sm={11}>
            <h3>CAN YOU SHOP TOGETHER WITH YOUR DESIGNER?</h3>
            <p className="main-text">That’s generally the most efficient way to work with your Designer and we highly encourage this approach to the project. Hiring a professional designer provides you two crucial things: pemoves the stressful burden of all the many complex decisions involved; and creates peace of mind because you’ve hired a professional to manage it all seamlessly and effectively from the original design vision to the very last item’s installation. Discover what our award-winning client service can do for you when you leave the shopping to Lazzarotti & Associati architects!</p>
          </Grid>
        </Grid>
      </div>
      <div className="container" style={{ textAlign:"center" }}>
        <div className="spacing-64">&nbsp;</div>
        <a href="/services" className="main-button" style={{ backgroundColor:"white", border:"1px solid black", color:"black" }}>Back to Services</a>
      </div>

      <div className="container">
        <div className="spacing-64">&nbsp;</div>
          <hr/>
        <div className="spacing-64">&nbsp;</div>
      </div>
    </>
  )
};

export default FAQ;