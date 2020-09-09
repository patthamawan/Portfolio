import React, {useEffect ,useCallback, useState, useEventListener} from 'react';
import { Row, Col } from 'react-bootstrap';


import RightSide from './components/art/RightSide'
import Girl from '../static/homepage.png'
// import Eyes from './components/eyes'

 
const HomePage = () => {
  return(
    <div>
      <div className="homepage">
        <div className="greeting">
          <h1>Hi, i'm nune</h1>
          <p>I’m a UX/UI designer / Junior frontend developer and a freelance 3D Animator based in London, UK.</p> 
        </div>
          <div className="list">
            <a href="projects">
              <h3>UX / UI Design</h3>
            </a>
            <a href="animation">
              <h3>Animation & Art</h3>
            </a>
          </div>
        <img className="welcome" src={Girl}/>
      </div>
    </div>
  )
}

export default HomePage

{/* <div className="face">
  <Eyes/>
  <div className="smile"></div>
</div>       
<div class="ocean">
  <div class="wave"></div>
</div>*/}