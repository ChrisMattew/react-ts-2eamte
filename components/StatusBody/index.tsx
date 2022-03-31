import React from 'react';
import TitleAndValue from '../TitleAndValue';
import './style';

type Props = {
  title1: string;
  value1: number;
  title2: string;
  value2: number;
};
const StatusBody = ({ title1, value1, value2, title2 }: Props) => {
  return (
    <div className="status-body">
      <TitleAndValue title={title1} value={value1} />
      <TitleAndValue title={title2} value={value2} />
    </div>
  );
};

export default StatusBody;
