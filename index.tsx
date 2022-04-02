import React from 'react';
import { render } from 'react-dom';
import KpiContainer from './components/KpiContainer';
import StatusContainer from './components/StatusContainer';
import Header from './components/Header';
import './style.css';
import TeamMood from './components/TeamMood';

const App = () => (
  <div className="main">
    <Header className="main-header" />
    <KpiContainer className="main-kpi-container" />
    <TeamMood className="main-team-mood-container" />
    <StatusContainer className="main-status-container" />
  </div>
);

render(<App />, document.getElementById('root'));
