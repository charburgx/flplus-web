import React, { useState, useEffect } from 'react'
import './App.scss';
import MainPage from './pages/MainPage';
import { useWinVersion } from './api/version';
import * as Constants from 'api/constants';

const App = () => {
  // Get release version info
  const [wversion] = useWinVersion();

  // Routing
  return (
    <div className="App">
      <MainPage ver={wversion} />
    </div>
  );
};

export default App;