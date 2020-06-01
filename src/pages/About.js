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
                My name is Patthamawan Iteeyaporn or Nune for short. I have 4 years experience in UX/UI design and another 4 years in 3d character animation. 
                I am a self taught designer and and recently React frontend developer.
                In my most recent role as a UX/UI designer, I worked closely with the product owners to conduct user research and user testing to improve the product and add new features.
                Designing a visual for the product and implementing HTML/CSS ready for the development team. Zanroo has many different type of products so I improved upon my team work and 
                communication skills in group assignments, whilst developing my organisation skills and self motivation by working on self innovated projects.
                </p>
                <p>
                  In my sparetime I like to watch movies, listen to music, play video games, drawing and traveling.
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
