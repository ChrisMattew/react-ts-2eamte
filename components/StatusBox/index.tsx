import React from 'react';
import './style';
import Paper from '../Paper';
import StatusBar from '../StatusBar';
import StatusHeader from '../StatusHeader';

type Props = {
  percent: number;
  title: string;
  subtitle: string;
  imgUrl: string;
};

const StatusBox = ({ percent, title, subtitle, imgUrl }: Props) => {
  return (
    <Paper className="status-box">
      <StatusHeader title={title} subtitle={subtitle} imgUrl={imgUrl} />
      <StatusBar percent={percent} />
    </Paper>
  );
};

export default StatusBox;
