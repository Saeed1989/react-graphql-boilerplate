import React from 'react';
import { useQuery } from '@apollo/client';
import { BOOK_TITLES } from '../../appolo/typeDefs';
import { Typography } from 'antd';
import BookList from '../../components/organisms/BookList';

const { Title } = Typography;

const BookListContainer = () => {
  const { loading, error, data } = useQuery(BOOK_TITLES, { fetchPolicy: 'cache-and-network' });

  return (
    <>
      <Title level={3}>Books:</Title>
      <BookList loading={loading} error={error} data={data}/>
    </>
  );
};

export default BookListContainer;
