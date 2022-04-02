import React from 'react';
import { render } from 'react-dom';
import KpiContainer from './components/KpiContainer';
import StatusContainer from './components/StatusContainer';
import Header from './components/Header';
import './style.css';
import TeamMood from './components/TeamMood';
import GraphContainer from './components/GraphContainer';

const App = () => (
  <div className="main">
    <Header className="main-header" />
    <KpiContainer className="main-kpi-container" />
    <TeamMood className="main-team-mood-container" />
    <GraphContainer className="main-graph-container" />
    <StatusContainer className="main-status-container" />
  </div>
);

render(<App />, document.getElementById('root'));
