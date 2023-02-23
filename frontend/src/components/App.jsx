import config from '../config.js';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../App.css';
import HistoryTabs from './HistoryTabs.jsx';
import Tabss from './Tabss.jsx';

function App() {
  const [history, setHistory] = useState(1);
  const changeHistory = (value) => {setHistory(value)}
  return (
    <div className="App">
      <Tabss history={history} setHistory={setHistory}/>
      {/* <HistoryTabs /> */}
      {/* <ChartSection /> */}
    </div>
  )
}

export default App;
