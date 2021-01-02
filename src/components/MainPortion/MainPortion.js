import React from "react";
import "./style.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stuffed from './CarouselImages/Stuffed.png';
import CarsNotLemons from './CarouselImages/CarsNotLemons.png';
import WhatsCooking from './CarouselImages/WhatsCooking.png';

function MainPortion(){
    return(
<div>
  <h1>Hello, world!</h1>
  <p>
For now some dummy text  
  </p>
  <br/>
  <br/>




  {/* Created a DIV for the Carousel */}
  <div className='carouselDiv'>
  <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-flex mx-auto w-80"
      src= {Stuffed}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-flex mx-auto w-80"
      src={CarsNotLemons}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-flex mx-auto w-80"
      src={WhatsCooking}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  </div>

</div>
    )
}

export default MainPortion