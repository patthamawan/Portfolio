import React, { useState, useEffect } from 'react';
import {} from 'react-bootstrap';


function useMouse() {
  const [eyeBall, setEyeBall] = useState({
    x: null,
    y: null,
  })	
  
  useEffect(() => {
    function handle(e) {
      setEyeBall ({
        x: e.clientX * 45 / window.innerWidth,
        y: e.clientY * 15 / window.innerHeight,
      })
    }
  
    document.addEventListener('mousemove', handle, false)
    return () => {
      document.removeEventListener('mousemove', handle, false)
    }
  }, [])
  
  return eyeBall;
}
 
const Eyes = () => {
    const {x, y} = useMouse();
    const eyePosition = {
      left: x,
      top: y,
    }
    return(
        <React.Fragment>
          <div className="eyes">
            <div className="eye-ball left">
              <div className="eye">
                <div style={eyePosition} className="ball"></div>
              </div>
              <div className="blush"></div>
            </div>
            <div className="eye-ball right">
              <div className="eye right">
                <div style={eyePosition} className="ball"></div>
              </div>
              <div className="blush"></div>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Eyes