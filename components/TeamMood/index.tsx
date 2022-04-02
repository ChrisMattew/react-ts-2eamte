import React from 'react';
import AvatarMood from '../AvatarMood';
import Paper from '../Paper';
import Text from '../Text';
import './style';

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

const TeamMood = () => {
  return (
    <Paper className="team-mood-container">
      <Text type="h3">Team Mood</Text>
      {team.map((member) => (
        <AvatarMood key={member.id} {...member} />
      ))}
    </Paper>
  );
};

export default TeamMood;
