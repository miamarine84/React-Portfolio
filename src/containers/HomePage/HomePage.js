import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';
import './style.css'
import Nav from '../../components/NavBar/Navbar';
import MainPortion from '../../components/MainPortion/MainPortion';

function HomePage() {
  return (
    <div className='homepage'>
      <Nav/>
      
      <Jumbotron>
      <MainPortion/>
      </Jumbotron>
  
    

    </div>
   
  );
}

export default HomePage;
