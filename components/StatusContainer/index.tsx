import React from 'react';
import StatusBox from '../StatusBox';
import './style';

const stats = [
  {
    id: 1,
    percent: 10,
  },
  {
    id: 2,
    percent: 50,
  },
  {
    id: 3,
    percent: 70,
  },
  {
    id: 4,
    percent: 90,
  },
];
const StatusContainer = () => {
  return (
    <section className="status-container">
      {stats.map((stat) => (
        <StatusBox key={stat.id} {...stat} />
      ))}
    </section>
  );
};

export default StatusContainer;
