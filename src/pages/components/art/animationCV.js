import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const animationCV = () => {
    return (
        <div className="download">
            <h5>Download</h5>
            <div>
            <a href={process.env.PUBLIC_URL + 'P.iteeyaporn_CV_(animation).pdf'} target="_blank">PatthamawanCV.pdf</a>
            </div>
        </div>
    )
}

export default animationCV
