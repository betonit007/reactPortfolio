import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
