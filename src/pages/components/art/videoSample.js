import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const videoSample = () => {
    return (
      <div className="video-list">
            <iframe src="https://player.vimeo.com/video/455828452"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <iframe src="https://player.vimeo.com/video/455616431"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <iframe src="https://player.vimeo.com/video/427054381"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    )
}

export default videoSample
