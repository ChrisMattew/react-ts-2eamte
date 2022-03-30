import React, { ReactNode } from 'react';
import './style';

type Props = {
  children: ReactNode;
  className?: string;
  danger?: boolean;
};

const Paper = ({ children, className, danger }: Props) => {
  const classNames = ['paper', className, danger && 'danger']
    .filter(Boolean)
    .join(' ');
  return <div className={classNames}>{children}</div>;
};
export default Paper;
