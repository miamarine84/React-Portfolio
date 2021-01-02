import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';

import './style.css';
import CarsNotLemons from '../../components/MainPortion/CarouselImages/CarsNotLemons.png';
import Stuffed from '../../components/MainPortion/CarouselImages/Stuffed.png';
import WhatsCooking from '../../components/MainPortion/CarouselImages/WhatsCooking.png';

function ProjectsPortion() {
  return (
    <div>

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
              s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ablished fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
              <ul>
                <ul> 
                  <a href="https://miguelangelweill.github.io/CarsNotLemons/" rel="noreferrer" target='_blank'>
                  <img src='https://seohacker.wpengine.com/wp-content/uploads/2011/07/Link-Search.jpg' alt='CarsNotLemons Project' rel="noreferrer"/> 
                    Visit my site
                  </a>
                </ul>
                <ul>
                  <a href="https://github.com/Miguelangelweill/CarsNotLemons" target='_blank'>
                  <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/> 
                    Visit it's Github repository
                  </a>
                </ul>
              </ul>
            </Col>
          </Row>
          <br />
          <Row >
            <Col md={{ order: 'last' }}>
              <img src={WhatsCooking} alt='' />
            </Col>
            <Col md={{ order: 'first' }}>
              s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ablished fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              Where does it come from?
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              <ul>
                <ul> 
                  <a href="https://infinite-falls-09874.herokuapp.com/" target='_blank'>
                  <img src='https://seohacker.wpengine.com/wp-content/uploads/2011/07/Link-Search.jpg'/> 
                    Visit my site
                  </a>
                </ul>
                <ul>
                  <a href="https://github.com/swatso2020/Project2" target='_blank'>
                  <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/> 
                    Visit it's Github repository
                  </a>
                </ul>
              </ul>
            </Col>
          </Row>
          <br />
          <br />
          <Row >
            <Col md={{ order: 'first' }}>
              <img src={Stuffed} alt='' />
            </Col>
            <Col md={{ order: 'last' }}>
              s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ablished fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


              Where does it come from?
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              <ul>
                <ul> 
                  <a href="https://peaceful-reaches-88708.herokuapp.com/home" target='_blank'>
                  <img src='https://seohacker.wpengine.com/wp-content/uploads/2011/07/Link-Search.jpg'/> 
                    Visit my site
                  </a>
                </ul>
                <ul>
                  <a href="https://github.com/miamarine84/Stuffed" target='_blank'>
                  <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/> 
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

