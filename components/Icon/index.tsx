import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  icon: IconProp;
};
const Icon = ({ icon }: Props) => {
  return <FontAwesomeIcon className="icon" icon={icon} />;
};
export default Icon;
