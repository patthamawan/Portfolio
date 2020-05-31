import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Drawing from '../static/contact-drawing.png';
import Instagram from '../static/ig.png';
import Vimeo from '../static/vimeo.png';
import Linkedin from '../static/linkedin.png';

const Contact = () => {
    return (
      <div className="contact">
        <div className="drawing">
          <img src={Drawing}/>
        </div>
        <div>
          <h1>Contact.</h1>
          <p><i class="fas fa-mobile-alt"></i>+44 7944 619 169</p>
          <a href="mailto:p.iteeyaporn@gmail.com"><p><i class="fas fa-envelope"></i>p.iteeyaporn@gmail.com</p></a>
          
          <div className="social">
            <a href="https://www.linkedin.com/in/p-iteeyaporn-750a3936" target="_blank">
              <img src={Linkedin}/>
            </a>
            <a href="https://www.instagram.com/nunny_art/" target="_blank"><img src={Instagram}/></a>
            <a href="https://vimeo.com/nuniteeyaporn" target="_blank"><img src={Vimeo}/></a>
          </div>
        </div>
      </div>
    )
}

export default Contact
