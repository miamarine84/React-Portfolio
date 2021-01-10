import React from "react";
import "../NavBar/style.scss";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function NavigationBar(props) {

  return (


    <div>

      <Navbar expand="lg" className='sticky-top'>
        <Navbar.Brand href="/home">Marcos-React</Navbar.Brand>
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

    </div >

  )
}
export default NavigationBar;
