import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/navbar.js';
import About from './components/about.js';
import Resume from './components/resume.js';
import Projects from './components/projects.js';
import Footer from './components/layout/footer.js';
import ProjectDetail from './components/projectDetail.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App app-content">
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/projects/:url" component={ProjectDetail}/>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
