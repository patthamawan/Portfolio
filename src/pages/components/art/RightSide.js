import React from 'react';
import {} from 'react-bootstrap';


import Animation from '../../../static/coming_soon.gif'

const RightSide = () => {
  return (
    <React.Fragment>
      <a>
        <div className="page-position right-side">
          <h3>Animation & Art</h3>
          <div className="coming-soon">
            <img src={Animation}/>
          </div>
        </div>
      </a>
    </React.Fragment>
  )
}

export default RightSide