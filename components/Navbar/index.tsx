import React from 'react';
import ListItem from '../ListItem';
import './style';

const pages = [
  {
    id: 1,
    url: '#',
    linkName: 'Link',
  },
  {
    id: 2,
    url: '#',
    linkName: 'Link',
  },
  {
    id: 3,
    url: '#',
    linkName: 'Link',
  },
  {
    id: 4,
    url: '#',
    linkName: 'Link',
  },
  {
    id: 5,
    url: '#',
    linkName: 'Link',
  },
  {
    id: 6,
    url: '#',
    linkName: 'Link',
  },
];

const Navbar = () => {
  return (
    <ul className="nav-menu">
      {pages.map((page) => (
        <ListItem key={page.id} {...page} />
      ))}
    </ul>
  );
};

export default Navbar;
