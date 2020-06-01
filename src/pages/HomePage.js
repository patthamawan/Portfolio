import React, {useEffect ,useCallback, useState, useEventListener} from 'react';
import { Row, Col } from 'react-bootstrap';


import RightSide from './components/art/RightSide'
import LeftSide from './components/design/LeftSide'
import Eyes from './components/eyes'

 
const HomePage = () => {
  return(
    <div>
      <div className="homepage">
        <div className="greeting">
          <h1>Hi, i'm nune</h1>
          <p>I’m a UX/UI designer / Junior frontend developer and a freelance 3D Animator based in London, UK.</p> 
          
        </div>
        <div className="face">
          <Eyes/>
          <div className="smile"></div>
        </div>
        <Row>
          <Col md={6}>
            <LeftSide/>
          </Col>
          <Col md={6}>
            <RightSide/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HomePage