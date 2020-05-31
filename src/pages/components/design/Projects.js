import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import Chat from '../../../static/negotiating.svg'
import Ps from '../../../static/ps.png'
import Ai from '../../../static/ai.png'
import Xd from '../../../static/xd.png'
import Pr from '../../../static/pr.png'
import Sketch from '../../../static/sketch.png'
import Invision from '../../../static/invision.png'
import Zeplin from '../../../static/zeplin.png'

import ProjectData from '../../config/ProjectData'
import Folder from './Folder'

const Folders = ProjectData.map( detail => <Folder key={detail.id} detail={detail} icon={detail} />)

const Projects = () => {
    return (
      <div className="container design-projects">
        <div className="intro">
          <h3>UX / UI Design</h3>
          <p>With 4 years of experience designing web app and mobile. Additional skills HTML5, CSS3, Bootstrap, SASS/LESS, React. </p>
          <div className="bottom">
            <div className="software">
              <img src={Ps}/>
              <img src={Ai}/>
              <img src={Pr}/>
              <img src={Xd}/>
              <img src={Sketch}/>
              <img src={Zeplin}/>
              <img src={Invision}/>
            </div>
            <div className="download">
              <h5>View & Download</h5>
              <a href={process.env.PUBLIC_URL + 'P.iteeyaporn_CV.pdf'} target="_blank">PatthamawanCV.pdf</a>
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