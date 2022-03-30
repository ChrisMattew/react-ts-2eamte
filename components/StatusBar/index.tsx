import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import './style';

type Props = {
  percent: number;
  color?: string;
};

const StatusBar = ({ percent }: Props) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const to = setTimeout(() => setValue(percent), 500);
    return () => clearTimeout(to);
  }, [percent]);

  return (
    <div
      className={classnames('status-bar-container', {
        'half-load': percent > 50,
        overload: percent >= 90,
      })}
    >
      <div
        style={{ width: value + '%' }}
        className={classnames('status-bar', {
          'half-load-bar': percent > 50,
          'overload-bar': percent >= 90,
        })}
      ></div>
    </div>
  );
};

export default StatusBar;
