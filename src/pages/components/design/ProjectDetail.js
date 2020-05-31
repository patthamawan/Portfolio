import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';


import Pencil from '../../../static/pencil_sketch.png'

import ProjectData from '../../config/ProjectData'

const ProjectDetail = (props) => {

  const { match: { params } } = props
  const data = ProjectData.find(item => item.id === params.projectId)

  return (
    <div className="project-detail">
      <div className="content">
        <Row>
          <Col lg={8} md={6}>
            <div className="image-sample">
              <Carousel>
                {
                  data.images.map(image => {
                    return(
                      <Carousel.Item>
                        <img key={image.id} src={require(`../../../static//work_sample/${image.img}`)} className="d-block w-100"/>
                      </Carousel.Item>
                    )
                  })
                }
              </Carousel>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="detail">
              <div className="header">
                <h4>{data.title}</h4>
                <p>{data.subHeader}</p>
              </div>
              <p>
                {data.detail}
              </p>
              <div className="skills">
                <p className="title">Responsibility</p>
              <p>{data.responsible}</p>
              </div>
            </div>
            <a className="back-btn" href="/projects">
              <p><i class="fas fa-arrow-left"></i>Back</p>
            </a>
          </Col>
        </Row>
      </div>
      <img className="img-pencil" src={Pencil}/>
    </div>
  )
}

export default ProjectDetail