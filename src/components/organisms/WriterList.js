import React from 'react';
import Writer from '../molecules/Writer';
import { Typography } from 'antd';

const { Title } = Typography;

const WriterList = (props) => {
  const { loading, error, data } = props;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.writers.map((writer, index) => (
    <div key={index}>
      <Title level={4}>{index + 1}</Title>
      <Writer writer={writer}></Writer>
    </div>
  ));
};

export default WriterList;
