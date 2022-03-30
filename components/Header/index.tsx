import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Avatar from '../Avatar';
import './style';

const Header = () => {
  return (
    <header className="header">
      <div className="head-left-side">
        <Logo />
      </div>
      <div className="head-mid-side">
        <Navbar />
      </div>
      <div className="head-right-side">
        <Avatar
          shape="rounded"
          name="Cristian Cristian Matteu"
          imgUrl="https://www.w3schools.com/howto/img_avatar.png"
        />
      </div>
    </header>
  );
};

export default Header;
