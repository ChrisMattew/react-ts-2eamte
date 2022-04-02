import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Avatar from '../Avatar';
import classnames from 'classnames';
import './style';

type Props = {
  className?: string;
};
const Header = ({ className }: Props) => {
  return (
    <header className={classnames('header', className)}>
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
