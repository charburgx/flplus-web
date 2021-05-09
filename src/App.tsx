import React, { useState, useEffect } from 'react'
import './App.scss';
import MainPage from './pages/MainPage';
import { useWinVersion } from './api/version';
import * as Constants from 'api/constants';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FAQPage from 'pages/FAQPage';

const App = () => {
  // Get release version info
  const [wversion] = useWinVersion();

  // Routing
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage ver={wversion} />
          </Route>
          <Route path="/faq">
            <FAQPage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
};

export default App;