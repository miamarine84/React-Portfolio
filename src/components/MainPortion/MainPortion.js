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
  <br/>
  <h1>Hello, world!</h1>
  <p>
Welcome to my page.....let's just start with a quick sample of my projects. Hope you enjoy my page created with ReactJS, React-Bootstrap and other NPM packages. 
  </p>
  <br/>
  <br/>




  {/* Created a DIV for the Carousel */}
  <div className='carouselDiv'>
  <Carousel>
  <Carousel.Item interval={2000}>
  <a href="https://peaceful-reaches-88708.herokuapp.com/home" rel="noreferrer" target='_blank'>
    <img
      className="d-flex mx-auto w-80"
      src= {Stuffed}
      alt="First slide"
    />
    </a>
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={2000}>
  <a href="https://miguelangelweill.github.io/CarsNotLemons/" rel="noreferrer" target='_blank'>
    <img
      className="d-flex mx-auto w-80"
      src={CarsNotLemons}
      alt="Second slide"
    />
    </a>
  </Carousel.Item>
  <Carousel.Item>
  <a href="https://infinite-falls-09874.herokuapp.com/" target='_blank'  rel="noreferrer">
    <img
      className="d-flex mx-auto w-80"
      src={WhatsCooking}
      alt="Third slide"
    />
    </a>
  </Carousel.Item>
</Carousel>
  </div>

</div>
    )
}

export default MainPortion