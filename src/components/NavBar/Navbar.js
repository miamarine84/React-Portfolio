import React from "react";
import "../NavBar/style.scss";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function NavigationBar(props) {
  let navBarElement = document.getElementsByClassName('navbar');

  let NavDisplay =()=>{
    
  }
  //  {navBarElement[0].hidden = true}
  return (


    <div>
    <div  class='navbar sticky-top'>
      <Navbar expand="lg">
        <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <Nav.Link className={
              window.location.pathname === "/" ||
                window.location.pathname === "/projects"
                ? "nav-links active"
                : "nav-links"}
              href="/projects">Projects
              </Nav.Link>
            <Nav.Link
              className=
              {
                window.location.pathname === "/" ||
                  window.location.pathname === "/aboutme"
                  ? "nav-links active"
                  : "nav-links"}
              href="/aboutme">
              About Me
            </Nav.Link>
            <Nav.Link
              className=
              {
                window.location.pathname === "/" ||
                  window.location.pathname === "/contactme"
                  ? "nav-links active"
                  : "nav-links"}
              href="/contactme">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr/>
    </div>
    </div >

  )
}
export default NavigationBar;
