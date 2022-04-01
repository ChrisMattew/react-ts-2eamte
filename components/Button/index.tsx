import React, { ReactNode } from 'react';
import './style';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon';
import Text from '../Text';

type Props = {
  buttonText: ReactNode;
  icon?: IconProp;
};
const Button = ({ buttonText, icon }: Props) => {
  return (
    <div className="button">
      <Icon icon={icon} className="button-icon" />
      <Text>{buttonText}</Text>
    </div>
  );
};

export default Button;
