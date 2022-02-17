import React from 'react';
import { Typography } from 'antd';
import WriterList from '../../components/organisms/WriterList';

const { Title } = Typography;

const WriterListContainer = () => {
  // const { loading, error, data } = useQuery(BOOK_TITLES);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <>
      <Title level={3}>Writers:</Title>
      <WriterList />
    </>
  );
};

export default WriterListContainer;
