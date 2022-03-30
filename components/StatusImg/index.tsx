import React from 'react';
import './style';

type Props = {
  imgUrl?: string;
  className?: string;
  shape: 'circle' | 'rounded';
};
const StatusImg = ({ imgUrl, className, shape }: Props) => {
  const classNames = [
    'avatar-box',
    className,
    shape === 'rounded' && 'rounded',
    shape === 'circle' && 'circle',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classNames} style={{ backgroundImage: `url(${imgUrl})` }} />
  );
};

export default StatusImg;
