import React, { ReactNode } from 'react';
import './style';

type Props = {
  children: ReactNode;
  className?: string;
  danger?: boolean;
  style?: any;
};

const Paper = ({ children, className, danger, style }: Props) => {
  const classNames = ['paper', className, danger && 'danger']
    .filter(Boolean)
    .join(' ');
  return (
    <div style={style} className={classNames}>
      {children}
    </div>
  );
};
export default Paper;
