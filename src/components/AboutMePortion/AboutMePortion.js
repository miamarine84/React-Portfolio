import React, {useState} from 'react';
import './AboutMeStyle.scss';

function AboutMePortion() {
  const [hook, setHook] = useState('none')

const test =(e)=>{

  //console.log( event._targetInst)

  let p =  e._targetInst.sibling.memoizedProps.style.display;
  console.log(p)
  console.log(e.target.value)
  setHook('inline')
  
}
  return (
    <div>
      <br/>
      <div>
        <h4>
          I'm Marcos, a coffee lover ☕, 30-something-year-old full-stack developer 💻
          I truly enjoy creating things we can use on a daily basis I have enjoyed leaning my entire life and extremely passionate about coding. From becoming a Marine to a small business owner I always knew that at the end of the day web and software development has always been my first love 💙.
    
         
      </h4>

      </div>
      <div id="particle-container">
        <div className="particle" >
          <img id='image' onMouseEnter={(e)=>test(e)} src='https://www.w3.org/html/logo/img/mark-word-icon.png' alt='html 5 icon' />
          <p style={{display: hook}}>
            testing
          </p>

        </div>
      
        <div className="particle" >
          <img id='image' src='https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png' alt='CSS logo' />
        </div>
        <div className="particle" >
          <img id='image' src='https://www.agnosticdev.com/sites/default/files/2016-01/npm-logo_1.png' alt='npm logo' />
        </div>
        <div className="particle" >
          <a href="https://www.marines.mil/" rel="noreferrer" target='_blank'>
          <img id='image' src='https://www.freepnglogos.com/uploads/marine-corps-png-logo/u-s-marine-corps-birthday-png-logo-1.png' alt='USMC logo' />
          <p style={{display: hook}}>
            testing this also
          </p>
          </a>
        </div>
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" >
          <img id='image' src='https://www.kindpng.com/picc/m/78-788134_javascript-logo-hd-png-download.png' alt='Javascript Logo' />
        </div>
        <div className="particle" >
          <img id='image' src='https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png' alt='Express & Node JS Logo' />
        </div>
        <div className="particle" />
        <div className="particle" />
        <div className="particle" >
          <img id='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAMHg-i2Bi3QhFEqtjGqT48-fVztSK_8k3A&usqp=CAU' alt='SQL Logo' />
        </div>

        <div className="particle" >
          <img id='image' src='https://simg.nicepng.com/png/small/80-804192_smartlogic-explores-javascript-react-and-flux-tech.png' alt='React Logo' />
        </div>
        <div className="particle" />
        <div className="particle">
          <img id='image' src='https://ih1.redbubble.net/image.361912508.3568/st,small,507x507-pad,600x600,f8f8f8.u2.jpg' alt='C++ logo' />
        </div>
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" >
          <img id='image' src='https://www.seekpng.com/png/detail/377-3772047_sass-logo.png' alt='Sass Logo' />
        </div>
        <div className="particle" />
      </div>
    </div>
  )
}

export default AboutMePortion