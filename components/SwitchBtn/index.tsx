import * as React from 'react';
import './style';
import classnames from 'classnames';

type Props = {
  className?: string;
};
const SwitchBtn = ({ className }: Props) => {
  return (
    <label className={classnames('switch', className)}>
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

export default SwitchBtn;
