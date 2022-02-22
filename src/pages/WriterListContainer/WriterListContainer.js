import React, { useState } from 'react';
import { Typography } from 'antd';
import { useQuery } from '@apollo/client';
import { WRITER_NAMES } from '../../appolo/typeDefs';
import WriterList from '../../components/organisms/WriterList';
import WriterOption from '../../components/organisms/WriterOptions';

const { Title } = Typography;

const WriterListContainer = () => {
  const [options, setOptions] = useState();
  const writerOpHandler = (options) => {
    setOptions(options);
  };

  return (
    <>
      <Title level={3}>Writer Options:</Title>
      <WriterOption onSubmit={(options) => writerOpHandler(options)} />
      <Title level={3}>Writer List:</Title>
      <>{!options ? <p>Please select and submit options</p> : <Writers options={options} />}</>
    </>
  );
};

const Writers = (props) => {
  const { options } = props;
  const { loading, error, data } = useQuery(WRITER_NAMES, { fetchPolicy: 'cache-and-network' });

  return (
    <>
      <WriterList loading={loading} error={error} data={data} />
    </>
  );
};

export default WriterListContainer;
