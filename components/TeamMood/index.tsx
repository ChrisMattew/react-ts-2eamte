import React from 'react';
import AvatarMood from '../AvatarMood';
import Paper from '../Paper';
import Text from '../Text';
import './style';
import classnames from 'classnames';

const team = [
  {
    id: 1,
    name: 'Andrea',
    job: 'UX Junior',
  },
  {
    id: 2,
    name: 'Alvaro',
    job: 'Back end developer',
  },
  {
    id: 3,
    name: 'Juan',
    job: 'UX Senior',
  },
  {
    id: 4,
    name: 'Jose',
    job: 'Marketing',
  },
  {
    id: 5,
    name: 'Maria',
    job: 'UX Junior',
  },
];

type Props = {
  className?: string;
};

const TeamMood = ({ className }: Props) => {
  return (
    <Paper className={classnames('team-mood-container', className)}>
      <Text type="h5">Team Mood</Text>
      {team.map((member) => (
        <AvatarMood key={member.id} {...member} />
      ))}
    </Paper>
  );
};

export default TeamMood;
