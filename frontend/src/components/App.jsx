import config from '../config.js';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../App.css';
import Chart from './Chart'
import HistoryTabs from './HistoryTabs.jsx';

function App() {
  return (
      <div className="App">
        <HistoryTabs />
      </div>
  )
}

export default App;
