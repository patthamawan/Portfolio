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
          <p>
          With 4 years of experience as a UX / UI designer at Zanroo. 
          In my most recent role as a UX/UI designer at Zanroo, I worked closely with the product owners to conduct user research and user testing to improve the product and add new features. 
          Designing a visual for the product and implementing HTML/CSS ready for the development team.
          <br/>
          As a self taught designer and have gained invaluable experience working in a competitive environment. 
          I am keen to expanding upon that experience and improve myself to become better. 
          <br/>
          I recently become interested in frontend development and taught myself how to code REACT. 
          To be able to design and implement a full working website from start to finish is achievement that I really enjoy.
          </p>

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