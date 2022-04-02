import * as React from 'react';
import './style';

const SwitchBtn = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

export default SwitchBtn;
