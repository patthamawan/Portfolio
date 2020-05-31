import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.scss';

import NavBar from './pages/NavBar'
import HomePage from './pages/HomePage.js';
import Projects from './pages/components/design/Projects'
import ProjectDetail from './pages/components/design/ProjectDetail'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/:projectId"  component={ProjectDetail}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
