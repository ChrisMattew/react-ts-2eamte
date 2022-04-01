import React from 'react';
import { render } from 'react-dom';
import KpiContainer from './components/KpiContainer';
import StatusContainer from './components/StatusContainer';
import Header from './components/Header';
import './style.css';
import MoodRange from './components/MoodRange';

const App = () => (
  <div className="main">
    <Header />
    <KpiContainer />
    <StatusContainer />
    <div className="test-mood-range">
      <MoodRange max={10} min={0}/>
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
