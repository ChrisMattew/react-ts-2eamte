import React from 'react';
import StatusBox from '../StatusBox';
import './style';

const stats = [
  {
    id: 1,
    percent: 10,
    title: 'test',
    subtitle: 'subtest',
    imgUrl:
      'https://www.cosepercrescere.it/wp-content/uploads/2014/06/Macedonia.jpg',
  },
  {
    id: 2,
    percent: 50,
    title: 'test',
    subtitle: 'subtest',
    imgUrl:
      'https://www.cosepercrescere.it/wp-content/uploads/2014/06/Macedonia.jpg',
  },
  {
    id: 3,
    percent: 70,
    title: 'test',
    subtitle: 'subtest',
    imgUrl:
      'https://www.cosepercrescere.it/wp-content/uploads/2014/06/Macedonia.jpg',
  },
  {
    id: 4,
    percent: 90,
    title: 'test',
    subtitle: 'subtest',
    imgUrl:
      'https://www.cosepercrescere.it/wp-content/uploads/2014/06/Macedonia.jpg',
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
