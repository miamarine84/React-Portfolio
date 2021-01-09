import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Nav from '../../components/NavBar/Navbar';
import ContactMePortion from '../../components/ContactMePortion/ContactMePortion'

function ContactMe() {
  const [show, setShow] = useState('inline');
  const [buttonHide, setButtonHide] = useState('none')
  let showUl = () => {
      console.log('here')
      setShow('none')
      setButtonHide('inline')
  }

  let hideUl = () => {
      setShow('inline')
      setButtonHide('none')
  }

  return (
    <div>

      <Nav/>

      <ContactMePortion />
      <button id="sideButton" onClick={showUl} className={'animate'} style={{ display: `${show}` }}>Click <br />
            Here!
            </button>

            <div >
                <button id="sideButton" onClick={hideUl} style={{ display: `${buttonHide}` }}>
                    Hide <br />Options
                </button>
                <ul id={'optionsList'} style={{ display: `${buttonHide}` }}>
                    <li>
                        <a href='https://docs.google.com/document/d/1EmTwYSCCWO7OgSBuDVptaxlR8p0B4trT-A9chlmsZyI/edit' target='_blank' rel="noreferrer">
                            <img src='https://image.shutterstock.com/image-vector/resume-icon-260nw-477290071.jpg' alt='Resume logo' />

                            <span>Resume</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/miamarine84' target='_blank' rel="noreferrer">
                            <img src='https://alanferrandiz.files.wordpress.com/2020/09/github_logo.png' alt='github logo' />

                            <span>Github</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/marcos-p-898b701ab/' target='_blank' rel="noreferrer">
                            <img src='https://image.shutterstock.com/image-vector/logo-icon-vector-template-260nw-1781944223.jpg' alt='linkedin logo' />

                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:marcos.patrocinio1184@gmail.com" target='_blank' rel="noreferrer">
                            <img src='https://image.shutterstock.com/image-vector/envelope-icon-vector-260nw-768672523.jpg' alt='email logo' />

                            <span>Email me</span>
                        </a>
                    </li>
                </ul>
            </div>

    </div>
  );
}

export default ContactMe;