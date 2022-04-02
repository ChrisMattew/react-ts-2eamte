import React, { ReactNode } from 'react';
import Text from '../Text';
import StatusImg from '../StatusImg';
import './style';

type Props = {
  title: string;
  subtitle: string;
  imgUrl?: string;
};
const StatusHeader = ({ title, subtitle, imgUrl }: Props) => {
  return (
    <div className="status-header">
      <div className="text-container">
        <Text type="h4">{title}</Text>
        <Text type="h6">{subtitle}</Text>
      </div>
      <StatusImg className="status-img" shape="circle" imgUrl={imgUrl} />
    </div>
  );
};

export default StatusHeader;
