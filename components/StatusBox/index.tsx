import React from 'react';
import './style';
import Paper from '../Paper';
import StatusBar from '../StatusBar';
import StatusHeader from '../StatusHeader';
import StatusFooter from '../StatusFooter';
import StatusBody from '../StatusBody';

type Props = {
  percent: number;
  title: string;
  subtitle: string;
  imgUrl: string;
  actualHours: string;
  soldHours: string;
  budget: string;
  budgetVal: number;
  profit: string;
  profitVal: number;
};

const StatusBox = ({
  percent,
  title,
  subtitle,
  imgUrl,
  actualHours,
  soldHours,
  budget,
  budgetVal,
  profit,
  profitVal,
}: Props) => {
  return (
    <Paper className="status-box">
      <StatusHeader title={title} subtitle={subtitle} imgUrl={imgUrl} />
      <StatusBody
        title1={budget}
        value1={budgetVal}
        title2={profit}
        value2={profitVal}
      />
      <StatusBar percent={percent} />
      <StatusFooter actualHours={actualHours} soldHours={soldHours} />
    </Paper>
  );
};

export default StatusBox;
