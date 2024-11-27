import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/projects" component={ProjectsPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
