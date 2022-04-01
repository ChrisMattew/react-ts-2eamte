import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classnames from 'classnames';

type Props = {
  icon: IconProp;
  className?: string;
};
const Icon = ({ icon, className }: Props) => {
  return (
    <FontAwesomeIcon className={classnames('icon', className)} icon={icon} />
  );
};
export default Icon;
