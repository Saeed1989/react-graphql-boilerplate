import React from 'react';
import { useQuery } from '@apollo/client';
import { BOOK_TITLES } from '../../appolo/typeDefs';
import { Typography } from 'antd';
import BookList from '../../components/organisms/BookList';
import BookOption from '../../components/organisms/BookOptions';

const { Title } = Typography;

const BookListContainer = () => {
  const { loading, error, data } = useQuery(BOOK_TITLES, { fetchPolicy: 'cache-and-network' });

  return (
    <>
      <Title level={3}>Book Options:</Title>
      <BookOption />
      <Title level={3}>Books List:</Title>
      <BookList loading={loading} error={error} data={data} />
    </>
  );
};

export default BookListContainer;
