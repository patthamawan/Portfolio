import React from 'react';
import {} from 'react-bootstrap';

import WebSketch from '../../../static/web_sketch.png'


const LeftSide = () => {
    return (
      <React.Fragment>
        <a href="projects">
          <div className="page-position left-side">
            <h3>UX / UI Design</h3>
            <div className="desgin-sketch">
              <img src={WebSketch}/>
            </div>
          </div>
        </a>
      </React.Fragment>
    )
}

export default LeftSide