import React from 'react';
import './style';
import Text from '../Text';

type Props = {
  imgUrl?: string;
  className?: string;
  name: string;
  job?: string;
  shape: 'circle' | 'rounded';
};
const Avatar = ({ imgUrl, className, name, job, shape }: Props) => {
  const last = (array: string[]): string => {
    return array[array.length - 1];
  };
  const [[nameInitialChar]] = name.split(' ');
  const [lastNameInitialChar] = last(name.split(' '));
  const [firstName] = name.split(' ');

  const classNames = [
    'avatar-box',
    className,
    shape === 'rounded' && 'rounded',
    shape === 'circle' && 'circle',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      <div className="avatar">
        {imgUrl ? (
          <div
            className="avatar-img"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
        ) : (
          <Text type="h4">{nameInitialChar + lastNameInitialChar}</Text>
        )}
      </div>
      <div className="avatar-text">
        <Text type="h4">{firstName}</Text>
        {job ? <Text type="p">{job}</Text> : null}
      </div>
    </div>
  );
};

export default Avatar;
