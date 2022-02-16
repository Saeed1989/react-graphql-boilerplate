import React from 'react';
import { useQuery } from '@apollo/client';
import { BOOK_TITLES } from '../../appolo/typeDefs';

const BookList = () => {
  const { loading, error, data } = useQuery(BOOK_TITLES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map((book) => (
    <div key={book.title}>
      <p>{book.title}</p>
    </div>
  ));
};

export default BookList;
