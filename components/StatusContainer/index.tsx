import React from 'react';
import StatusBox from '../StatusBox';
import './style';
import classnames from 'classnames';

const stats = [
  {
    id: 1,
    percent: 10,
    title: 'test',
    subtitle: 'subtest',
    imgUrl:
      'https://www.cosepercrescere.it/wp-content/uploads/2014/06/Macedonia.jpg',
    actualHours: 'Actual Hours',
    soldHours: 'Sold Hours',
    budget: 'budget',
    budgetVal: 0,
    profit: 'profit',
    profitVal: 0,
  },
  {
    id: 2,
    percent: 50,
    title: 'test',
    subtitle: 'subtest',
    imgUrl:
      'https://www.cosepercrescere.it/wp-content/uploads/2014/06/Macedonia.jpg',
    actualHours: 'Actual Hours',
    soldHours: 'Sold Hours',
    budget: 'budget',
    budgetVal: 0,
    profit: 'profit',
    profitVal: 0,
  },
  {
    id: 3,
    percent: 70,
    title: 'test',
    subtitle: 'subtest',
    imgUrl:
      'https://www.cosepercrescere.it/wp-content/uploads/2014/06/Macedonia.jpg',
    actualHours: 'Actual Hours',
    soldHours: 'Sold Hours',
    budget: 'budget',
    budgetVal: 0,
    profit: 'profit',
    profitVal: 0,
  },
  {
    id: 4,
    percent: 90,
    title: 'test',
    subtitle: 'subtest',
    imgUrl:
      'https://www.cosepercrescere.it/wp-content/uploads/2014/06/Macedonia.jpg',
    actualHours: 'Actual Hours',
    soldHours: 'Sold Hours',
    budget: 'budget',
    budgetVal: 0,
    profit: 'profit',
    profitVal: 0,
  },
];

type Props = {
  className?: string;
};

const StatusContainer = ({ className }: Props) => {
  return (
    <section className={classnames('status-container', className)}>
      {stats.map((stat) => (
        <StatusBox key={stat.id} {...stat} />
      ))}
    </section>
  );
};

export default StatusContainer;
