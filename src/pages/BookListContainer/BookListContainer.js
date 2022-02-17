import React from 'react';
import { Typography } from 'antd';
import BookList from '../../components/organisms/BookList';

const { Title } = Typography;

const BookListContainer = () => {
  // const { loading, error, data } = useQuery(BOOK_TITLES);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <>
      <Title level={3}>Books:</Title>
      <BookList />
    </>
  );
};

export default BookListContainer;
