import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import Ps from '../../../static/ps.png'
import Ai from '../../../static/ai.png'
import Xd from '../../../static/xd.png'
import Sketch from '../../../static/sketch.png'
import Invision from '../../../static/invision.png'
import Zeplin from '../../../static/zeplin.png'

import ProjectData from '../../config/ProjectData'
import Folder from './Folder'

const Folders = ProjectData.map( detail => <Folder key={detail.id} detail={detail} icon={detail} />)

function shoot() {
  alert("Great Shot!");
}

const Projects = () => {
    return (
      <div className="container design-projects">
        <div className="intro">
          <h3>UX / UI Design</h3>
          <p>
            As a UX/UI designer, I work closely with product owners across multiple projects to 
            conduct user research and user testing to improve the product and add new features. 
            I'm also in charge of creating visual design and implementing HTML/CSS for development teams. 
            <br/>
            Below are some of the tools I have used extensively in past projects:
          </p>
          <div className="software">
            <img src={Ps}/>
            <img src={Ai}/>
            <img src={Xd}/>
            <img src={Sketch}/>
            <img src={Zeplin}/>
            <img src={Invision}/>
          </div>
          <div className="bottom">
            <div className="download">
              <h5>View & Download</h5>
              <a href={process.env.PUBLIC_URL + 'P.iteeyaporn_CV.pdf'} target="_blank">PatthamawanCV.pdf</a>
              <a href={process.env.PUBLIC_URL + 'UX_UI_Portfolio.pdf'} target="_blank">Download Portfolio(PDF)</a>
            </div>
            <a className="back-btn" href="/">
              <p><i class="fas fa-arrow-left"></i>Back</p>
            </a>
          </div>
        </div>
       
        <div className="project-list">
          {Folders}
        </div>
      </div>
    )
}

export default Projects