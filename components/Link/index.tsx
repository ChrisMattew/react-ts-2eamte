import React from 'react';
import './style';

type Props = {
  url: string;
  linkName: string;
  className?: string;
};
const Link = ({ linkName, url, className }: Props) => {
  return (
    <a className={className} href={url}>
      {linkName}
    </a>
  );
};

export default Link;
