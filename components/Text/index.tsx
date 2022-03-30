import React, { ReactNode } from 'react';
import './style.css';

type Props = {
  size?: string;
  weight?: string;
  color?: string;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
};

const Text = ({ size, weight, color, children, type = 'p' }: Props) => {
  const Component = type;
  return (
    <Component style={{ fontSize: size, fontWeight: weight, color }}>
      {children}
    </Component>
  );
};
export default Text;
