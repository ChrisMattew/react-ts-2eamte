import React from 'react';
import './style';
import Paper from '../Paper';
import StatusBar from '../StatusBar';
import StatusHeader from '../StatusHeader';
import StatusFooter from '../StatusFooter';

type Props = {
  percent: number;
  title: string;
  subtitle: string;
  imgUrl: string;
  actualHours: string;
  soldHours: string;
};

const StatusBox = ({
  percent,
  title,
  subtitle,
  imgUrl,
  actualHours,
  soldHours,
}: Props) => {
  return (
    <Paper className="status-box">
      <StatusHeader title={title} subtitle={subtitle} imgUrl={imgUrl} />
      <StatusBar percent={percent} />
      <StatusFooter actualHours={actualHours} soldHours={soldHours} />
    </Paper>
  );
};

export default StatusBox;
