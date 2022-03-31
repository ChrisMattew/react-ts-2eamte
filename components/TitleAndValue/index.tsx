import React from 'react';
import Text from '../Text';
import './style';

type Props = {
  title: string;
  value: string;
};
const TitleAndValue = ({ title, value }: Props) => {
  return (
    <div className="title-val-container">
      <div className="key-title">
        <Text type="p">{title}:</Text>
      </div>
      <div className="value-of-key-title">
        <Text type="p">{value}€</Text>
      </div>
    </div>
  );
};

export default TitleAndValue;
