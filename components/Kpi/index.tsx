import React, { ReactNode } from 'react';
import Text from '../Text';
import Paper from '../Paper';
import Icon from '../Icon';
import './style';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  title: string;
  value: number;
  className?: string;
  icon?: IconProp;
  error?: boolean;
};

const Kpi = ({ title, value, icon, error }: Props) => {
  return (
    <Paper danger={error}>
      <div className="inner-container">
        {icon && <Icon icon={icon} />}
        <Text type="h1" weight="bold">
          {value}
        </Text>
        <Text type="p" weight="normal">
          {title}
        </Text>
      </div>
    </Paper>
  );
};

export default Kpi;
