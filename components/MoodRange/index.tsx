import React, { useState } from 'react';
import classnames from 'classnames';
import './style.css';

type Props = {
  max: number;
  min: number;
};
const MoodRange = ({ max, min }: Props) => {
  const [state, setSlide] = useState((max + min) / 2);
  const handleChange = (event: any) => {
    setSlide(event.target.value);
  };

  return (
    <input
      className={classnames(
        'mood-slider',
        {
          angry_mood: state <= (max + min) * 0.3,
        },
        { bored_mood: state > (max + min) * 0.3 && state <= (max + min) * 0.6 },
        { happy_mood: state > (max + min) * 0.6 && state <= max }
      )}
      type="range"
      step={0.1}
      min={min}
      max={max}
      value={state}
      onChange={handleChange}
    />
  );
};

export default MoodRange;
