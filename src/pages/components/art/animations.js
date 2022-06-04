import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ReactPlayer  from 'react-player';


import animationData from '../../config/animationData'
import Cv from './animationCV'
import VideoSamples from './videoSample'

const animation = (props) => {
    return (
      <React.Fragment>
        <div className="container animation">
          <Row>
            <Col lg={6} md={12}>
              <div className="intro">
                <h1>I’M AN ANIMATOR</h1>
                <p>I have over 4 years of experience in the 3D animation industry working on TV series and commercials. I like to animate in my spare time and love learning and getting feedback from other animators by subscribing to Animawarriors.com to improve my skill</p>
              </div>
              <Cv/>
            </Col>
            <Col lg={6} md={12}>
              <ReactPlayer className="video" controls url="https://vimeo.com/manage/videos/717126731"/>
            </Col>
          </Row>
          <VideoSamples/>

        </div>
        </React.Fragment>
    )
}

export default animation
