import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const LvItem = (props) => {
  const { label, value } = props;
  return (
    <>
      {label && value ? (
        <Title level={4}>
          {label} : {value}
        </Title>
      ) : null}
    </>
  );
};

export default LvItem;
