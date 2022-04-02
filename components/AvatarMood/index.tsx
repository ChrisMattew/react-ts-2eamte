import React from 'react';
import Avatar from '../Avatar';
import MoodRange from '../MoodRange';
import './style';

type Props = {
  name: string;
  job: string;
  imgUrl?: string;
};
const AvatarMood = ({ name, job, imgUrl }: Props) => {
  return (
    <div className="avatar-mood-box">
      <Avatar name={name} job={job} imgUrl={imgUrl} shape="circle" />
      <MoodRange min={1} max={3} />
    </div>
  );
};

export default AvatarMood;
