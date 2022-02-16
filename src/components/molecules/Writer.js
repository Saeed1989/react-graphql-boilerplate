import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Writer = (props) => {
  const { writer } = props;
  return (
    <>
      <Title level={4}>{writer.name}</Title>
    </>
  );
};

export default Writer;
