import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Folder = (props) => {
    return (
      <Link key={props.detail.id}  to={`/${props.detail.id}`} >
        <div className="project">
        <div>
          <img src={require(`../../../static/${props.detail.icon}`)} />
          <p className="title">{props.detail.title}</p>
          <p>{props.detail.subHeader}</p>
        </div>
        </div>
      </Link>
    )
}

export default Folder