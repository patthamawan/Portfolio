import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import animationData from '../../config/animationData'


const animation = (props) => {
    return (
      <React.Fragment>
        <div className="container">
          <div className="intro">
            <h1>Videos are coming Soon!</h1>
          </div>
          <div className="back-btn">
            <a href="/">BACK</a>
          </div>
        </div>
        </React.Fragment>
    )
}

export default animation