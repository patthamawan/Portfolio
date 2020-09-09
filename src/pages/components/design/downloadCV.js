import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const downloadCV = () => {
    return (
        <div className="download">
            <h5>Download</h5>
            <div>
            <a href={process.env.PUBLIC_URL + 'P.iteeyaporn_CV.pdf'} target="_blank">PatthamawanCV.pdf</a>
            </div>
        </div>
    )
}

export default downloadCV