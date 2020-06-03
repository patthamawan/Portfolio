import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Gif from '../static/coming_soon.gif';

class ReloadableGif extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        gif: '../static/coming_soon.gif',
        loaded: '../static/coming_soon.gif',
      }
    }
    
    reloadGif = () => {
      this.setState({loaded: ''})
      setTimeout(() => {
        this.setState({loaded: this.state.gif})
      }, 0)
    }
    
    render(){
      return <div>
        <img src={this.state.loaded} />
        <button onClick={this.reloadGif}>Replay Animation</button>
      </div>
    }
  }

export default ReloadableGif
