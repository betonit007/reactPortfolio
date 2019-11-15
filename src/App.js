import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={AboutMe} />
          <Navbar />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={ContactMe} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
