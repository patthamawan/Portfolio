import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import animationData from '../../config/animationData'


const animation = (props) => {
    return (
      <React.Fragment>
        <div className="container">
          <div className="intro">
            <h1>Animations</h1>
            <p>Videos sample of work.</p>
          </div>
          <div className="video-list">
            <Row>
              <Col md={6} sm={12}>
                <iframe src="https://player.vimeo.com/video/371390502" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              </Col>
              <Col md={6} sm={12}>
                <iframe src="https://player.vimeo.com/video/455828452"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              </Col>
              <Col md={6} sm={12}>
                <iframe src="https://player.vimeo.com/video/455616431"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              </Col>
              <Col md={6} sm={12}>
                <iframe src="https://player.vimeo.com/video/427054381"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              </Col>
            </Row>
          </div>
        </div>
        </React.Fragment>
    )
}

export default animation