import React from 'react';
import {} from 'react-bootstrap';


import Animation from '../../../static/coming_soon.gif'
import Animation2 from '../../../static/coming.png'
import Animation3 from '../../../static/Coming_Soon_Animation.png'
const RightSide = () => {
  return (
    <React.Fragment>
      <a>
        <div className="page-position right-side">
          <h3>Animation & Art</h3>
          <div className="coming-soon">
            {/* <div className="animation-gif"/> */}
            <img src={Animation3}/>
          </div>
        </div>
      </a>
    </React.Fragment>
  )
}

export default RightSide