import React from 'react';
import { render } from 'react-dom';
import KpiContainer from './components/KpiContainer';
import StatusContainer from './components/StatusContainer';
import Header from './components/Header';
import './style.css';
import TeamMood from './components/TeamMood';
import Button from './components/Button';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import SwitchBtn from './components/SwitchBtn';

const App = () => (
  <div className="main">
    <Header />
    <KpiContainer />
    <StatusContainer />
    <div className="test-mood-range">
      <TeamMood />
      <Button icon={faDownload} buttonText="ciao" />
      <SwitchBtn />
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
