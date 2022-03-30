import React from 'react';
import { render } from 'react-dom';
import KpiContainer from './components/KpiContainer';
import StatusContainer from './components/StatusContainer';
import Header from './components/Header';
import './style.css';

const App = () => (
  <div className="main">
    <Header />
    <KpiContainer />
    <StatusContainer />
  </div>
);

render(<App />, document.getElementById('root'));
