import React from 'react';
import './style';
import Paper from '../Paper';
import StatusBar from '../StatusBar';

type Props = {
  percent: number;
};

const StatusBox = ({ percent }: Props) => {
  return (
    <Paper className="status-box">
      <StatusBar percent={percent} />
    </Paper>
  );
};

export default StatusBox;
