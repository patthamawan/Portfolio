import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Me from '../static/me_1.jpeg'
import Diving from '../static/me_2.jpeg'
import Profile from '../static/profilePhoto.jpeg'
import Doodle from '../static/artwork.png'


const About = () => {
    return (
        <div className="about-me container">
          <Row>
            <Col lg={5}>
              <h1>ABOUT ME .</h1>            
              <div className="text">
                <p>
                  My name is Patthamawan Iteeyaporn or Nune for short. I have 8 years commercial experience in total - 
                  4 years spent in 3D character animation and subsequently 4 years in UX/UI design.
                  I studied 3D animation at Staffordshire University, and since then I have branched out into web design with a passion for putting the user experience first.
                  
                  Over the years, I have gained invaluable experience from working with various stakeholders within a startup environment 
                  and have strong teamwork, communication and organisational skills. I am self motivated and I like working on personal 
                  projects to keep on top of changes in the technology and continuously develop my skills. I recently became interested in 
                  frontend development and taught myself REACT with the goal of designing and implementing a fully functional website.  
                </p>
                <p>
                  In my spare time, I like to watch movies, listen to music, play video games, draw and travel.
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <div className="photos">
                <div className="polaroid">
                  <img src={Me}/>
                  <p>Taiwan</p>
                </div>
                <div className="polaroid">
                  <img src={Diving}/>
                  <p>First time Diving</p>
                </div>
                <div className="polaroid">
                  <img src={Profile}/>
                  <p>Nunny</p>
                </div>
              </div>
            </Col>
          </Row>
          <img className="doodle" src={Doodle}/>
        </div>
    )
}

export default About
