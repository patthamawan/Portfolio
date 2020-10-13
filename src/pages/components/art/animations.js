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
                <p>I have over 4 years of experience in the 3D animation industry working on TV series and commercials. I like to animate in my spare time and love learning and getting feedback from other animators. I joined Animdojo 6 months ago to learn and improve my animation skills from there.</p>
              </div>
              <Cv/>
            </Col>
            <Col lg={6} md={12}>
              <ReactPlayer className="video" controls url="https://youtu.be/rLxJm35Q6eA"/>
            </Col>
          </Row>
          <VideoSamples/>

        </div>
        </React.Fragment>
    )
}

export default animation
