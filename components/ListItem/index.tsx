import React from 'react';
import Link from '../Link';
import './style';

type Props = {
  url: string;
  linkName: string;
};
const ListItem = ({ url, linkName }: Props) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" url={url} linkName={linkName} />
    </li>
  );
};

export default ListItem;
