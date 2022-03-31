import React from 'react';
import Text from '../Text';
import './style';

type Props = {
  actualHours: string;
  soldHours: string;
};
const StatusFooter = ({ actualHours, soldHours }: Props) => {
  return (
    <div>
      <Text type="p">{actualHours}</Text>
      <Text type="p">{soldHours}</Text>
    </div>
  );
};

export default StatusFooter;
