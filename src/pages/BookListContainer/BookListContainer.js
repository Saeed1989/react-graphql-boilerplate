import React from 'react';
import BookList from '../../components/organisms/BookList';

const BookListContainer = () => {
  // const { loading, error, data } = useQuery(BOOK_TITLES);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <>
      <BookList/>
    </>
  );
};

export default BookListContainer;
