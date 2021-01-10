import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';

import './style.css';
import CarsNotLemons from '../../components/MainPortion/CarouselImages/CarsNotLemons.png';
import Stuffed from '../../components/MainPortion/CarouselImages/Stuffed.png';
import WhatsCooking from '../../components/MainPortion/CarouselImages/WhatsCooking.png';

function ProjectsPortion() {
  return (
    <div>
      <br />
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <br />
        <Container  >
          <Row>
            <Col md={{ order: 'first' }}>
              <img src={CarsNotLemons} alt='' />
            </Col>
            <Col md={{ order: 'last' }}>
              <h3>Cars Not Lemons</h3>
              <h6>
                Want to find out what car is more affordable in it's lifespan? Cars Not Lemons is a website that I saw was needed in today's world that demands their users to be financially conscious. Through an API we are able to either show you your estimated monthly bills for any vehicle or compare any two vehicles monthly bills (maintenance, MPG, Insurance to name a few) and give the least financially conscious vehicle the 'Lemon' rating.              
              </h6>
              <h5>
                Challenges and Lessons Learnt:
              </h5>
              <h6>
                This project took in to consideration time and teamwork complexities even learning how to work with API's and the details that come with that. Through all of that our small team did what I feel is a great product. Learning how to deal with other developers building team cohesion through endless hours to be able to launch a project that I'm very proud of being a part of. As far as the API and integration it was fun now I enjoy looking through API's and their endless data, how complex yet simple it is.
              </h6>

              <ul>
 
                <ul> 
                  <a href="https://miguelangelweill.github.io/CarsNotLemons/" rel="noreferrer" target='_blank'>
                  <img src='https://seohacker.wpengine.com/wp-content/uploads/2011/07/Link-Search.jpg' alt='CarsNotLemons Project' /> 
                    Visit my site
                  </a>
                </ul>
                <ul>
                  <a href="https://github.com/Miguelangelweill/CarsNotLemons" rel="noreferrer" target='_blank'>
                  <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='Github logo' /> 
                    Visit it's Github repository
                  </a>
                </ul>
              </ul>
            </Col>
          </Row>
          <hr/>
          <br />
          <Row >
            <Col md={{ order: 'last' }}>
              <img src={WhatsCooking} alt='' />
            </Col>
            <Col md={{ order: 'first' }}>
            <h3>What's Cookin'</h3>
              <h6>
              Ever been home and have no clue on what to cook? We all been there, well with the help of this full-stacked website we solved that problem by simply allowing you to add what ingredients you have home and with a great API as well as backend data we find an amazing recipe to cook for that day without having much of a fuzz about it.          
              </h6>
              <h5>
                Challenges and Lessons Learnt:
              </h5>
              <h6>
                My first full-stack website and that in itself was a great challenge. Learning how to deal with backend and the integration it needs to truly develop a clean and efficient product. Lots of research and time went in to what now I see as a great leap in my coding experience. I needed the push to get out of my comfort zone and this definitely did it. Through it I learnt that pushing yourself is the best way to learn something that brings me joy mainly after seeing such a nice finished product. 
              </h6>

              <ul>
                <ul> 
                  <a href="https://infinite-falls-09874.herokuapp.com/" target='_blank'  rel="noreferrer">
                  <img src='https://seohacker.wpengine.com/wp-content/uploads/2011/07/Link-Search.jpg' alt='Whats Cookin' /> 
                    Visit my site
                  </a>
                </ul>
                <ul>
                  <a href="https://github.com/swatso2020/Project2" target='_blank' rel="noreferrer">
                  <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='Github logo'/> 
                    Visit it's Github repository
                  </a>
                </ul>
              </ul>
            </Col>
          </Row>
          <hr />
          <br />
          <Row >
            <Col md={{ order: 'first' }}>
              <img src={Stuffed} alt='' />
            </Col>
            <Col md={{ order: 'last' }}>
            <h3>Stuff'd</h3>
              <h6>
          Discussions with the significant other on where to go out to eat? Not to worry we will help you. In this full-stack React website the user is allow to link to their partner and both can swipe left or right on restaurants that they choose which categories they are interested in which they are prompted through the Yelp API. As they swipe we let them know if there is a mutual like and recommend that restaurant for them to dine.          
              </h6>
              <h5>
                Challenges and Lessons Learnt:
              </h5>
              <h6>
                Being a project manager and dealing with such a complex project was challenging. But after a few days (because of deadlines) we produced a great MVP. One that is very functional and took lots of learnignt throughout. Learning more about React the whole way through. Complicated project but one that when completed I truly felt like a developer and ready to continue on this journey!
              </h6>

              <ul>
                <ul> 
                  <a href="https://peaceful-reaches-88708.herokuapp.com/home" target='_blank' rel="noreferrer">
                  <img src='https://seohacker.wpengine.com/wp-content/uploads/2011/07/Link-Search.jpg' 
                  alt='Stuffed'/> 
                    Visit my site
                  </a>
                </ul>
                <ul>
                  <a href="https://github.com/miamarine84/Stuffed" target='_blank' rel="noreferrer">
                  <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='Github logo' /> 
                    Visit it's Github repository
                  </a>
                </ul>
              </ul>
        </Col>
          </Row>
        </Container>


      </div>
    </div>
  );
}

export default ProjectsPortion;


/* <CardDeck>
<Card bg='light' body={true}>
    <Card.Img variant="top"  src={CarsNotLemons}/>
  <Card.Body>
    <Card.Title>Cars Not Lemons</Card.Title>
    <Card.Text>
  <h5>
    Project:
    </h5>
</Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
<Card bg='light' body={true}>
  <Card.Img variant="top" src={Stuffed} />
  <Card.Body>
    <Card.Title>What's Cookin</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This card has even longer content than the first to
      show that equal height action.
</Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
</CardDeck>
<br />
<Container>
<Row>
  <CardDeck>
<Card bg='light' body={true}>
    <Card.Img variant="top" src={WhatsCooking} />
    <Card.Body>
      <Card.Title>What's Cookin</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </CardDeck>
</Row>
</Container>


{/* This Styling has to get moved to the style CSS and done on mobile */


// <CardDeck>
// <Card>
//   <Card.Img variant="top" src="holder.js/100px160" />
//   <Card.Body>
//     <Card.Title>Card title</Card.Title>
//     <Card.Text>
//       This is a wider card with supporting text below as a natural lead-in to
//       additional content. This content is a little bit longer.
// </Card.Text>
//   </Card.Body>
//   <Card.Footer>
//     <small className="text-muted">Last updated 3 mins ago</small>
//   </Card.Footer>
// </Card>
// <Card>
//   <Card.Img variant="top"  src="holder.js/100px160" />
//   <Card.Body>
//     <Card.Title>Card title</Card.Title>
//     <Card.Text>
//       This card has supporting text below as a natural lead-in to additional
// content.{' '}
//     </Card.Text>
//   </Card.Body>
//   <Card.Footer>
//     <small className="text-muted">Last updated 3 mins ago</small>
//   </Card.Footer>
// </Card>
// <Card>
//   <Card.Img variant="top" src="holder.js/100px160" />
//   <Card.Body>
//     <Card.Title>Card title</Card.Title>
//     <Card.Text>
//       This is a wider card with supporting text below as a natural lead-in to
//       additional content. This card has even longer content than the first to
//       show that equal height action.
// </Card.Text>
//   </Card.Body>
//   <Card.Footer>
//     <small className="text-muted">Last updated 3 mins ago</small>
//   </Card.Footer>
// </Card>
// </CardDeck> */}

