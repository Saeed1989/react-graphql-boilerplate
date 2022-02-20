import React from 'react';
import { Typography } from 'antd';
import { useQuery } from '@apollo/client';
import { WRITER_NAMES } from '../../appolo/typeDefs';
import WriterList from '../../components/organisms/WriterList';
import WriterOption from '../../components/organisms/WriterOptions';

const { Title } = Typography;

const WriterListContainer = () => {
  const { loading, error, data } = useQuery(WRITER_NAMES, { fetchPolicy: 'cache-and-network' });

  return (
    <>
      <Title level={3}>Writer Options:</Title>
      <WriterOption />
      <Title level={3}>Writer List:</Title>
      <WriterList loading={loading} error={error} data={data} />
    </>
  );
};

export default WriterListContainer;
