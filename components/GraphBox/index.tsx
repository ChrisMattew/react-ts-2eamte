import React from 'react';
import GraphHeader from '../GraphHeader';
import Paper from '../Paper';
import './style';

type Props = {
  title: string;
  flex: number;
};
const GraphBox = ({ title, flex }: Props) => {
  return (
    <Paper style={{ flex: flex }} className="graph-box">
      <GraphHeader title={title} />
    </Paper>
  );
};

export default GraphBox;
