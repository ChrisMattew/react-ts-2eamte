import React from 'react';
import SwitchBtn from '../SwitchBtn';
import Text from '../Text';
import './style';

type Props = {
  title: string;
};
const GraphHeader = ({ title }: Props) => {
  return (
    <div className="graph-header">
      <div className="graph-title">
        <Text type="h4">{title}</Text>
      </div>
      <div className="graph-switch">
        <SwitchBtn className='selected-swtich' />
      </div>
    </div>
  );
};

export default GraphHeader;
