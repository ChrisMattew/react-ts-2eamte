import React from 'react';
import GraphBox from '../GraphBox';
import './style';
import classnames from 'classnames';

const graphs = [
  {
    id: 1,
    title: 'Total revenue',
    flex: 1.5,
  },
  {
    id: 2,
    title: 'Budget',
    flex: 1,
  },
];

type Props = {
  className?: string;
};
const GraphContainer = ({ className }: Props) => {
  return (
    <section className={classnames('graph-container', className)}>
      {graphs.map((graph) => (
        <GraphBox key={graph.id} {...graph} />
      ))}
    </section>
  );
};

export default GraphContainer;
