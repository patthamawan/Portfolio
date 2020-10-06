import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import Ps from '../../../static/ps.png'
import Ai from '../../../static/ai.png'
import Xd from '../../../static/xd.png'
import Sketch from '../../../static/sketch.png'
import Invision from '../../../static/invision.png'
import Zeplin from '../../../static/zeplin.png'
import Figma from '../../../static/figma-logo.png'

import ProjectData from '../../config/ProjectData'
import Folder from './Folder'
import Cv from './downloadCV'

const Folders = ProjectData.map( detail => <Folder key={detail.id} detail={detail} icon={detail} />)


const Projects = () => {
    return (
      <React.Fragment>
        <div className="container design-projects">
          <div className="intro">
            <h1>I’M A UX / UI DESIGNER</h1>
            <Row>
              <Col lg={6} md={12}>
                <p className="ocupation-detail">
                  As a UX/UI designer, I work closely with product owners across multiple projects to
                  conduct user research and user testing to improve the product and add new features.
                  I'm in charge of creating visual design and implementing HTML/CSS in some of the projects for development teams.
                  <br/>
                  Since June 2020, I have been working as a contractor for Botnoi Consulting Thailand.
                </p>
              </Col>
              <Col lg={6}md={12}>
                <p>Below are some of the tools I have used extensively in past projects:</p>
                <div className="software">
                  <img src={Ps}/>
                  <img src={Ai}/>
                  <img src={Xd}/>
                  <img src={Sketch}/>
                  <img src={Zeplin}/>
                  <img src={Invision}/>
                  <img src={Figma}/>
                </div>
              </Col>
              <Col md={12}>
                <Cv/>
              </Col>
            </Row>
          </div>
        </div>
        <div className="project-list">
          {Folders}
        </div>
      </React.Fragment>
    )
}

export default Projects
