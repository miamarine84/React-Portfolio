import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Nav from '../../components/NavBar/Navbar';
import ContactMePortion from '../../components/ContactMePortion/ContactMePortion'

function ContactMe() {
  return (
    <div>

      <Nav/>

      <ContactMePortion />


    </div>
  );
}

export default ContactMe;