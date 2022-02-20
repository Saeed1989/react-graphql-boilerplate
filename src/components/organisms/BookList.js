import React from 'react';
import Book from '../molecules/Book';

const BookList = (props) => {
  const { loading, error, data } = props;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map((book) => (
    <div key={book.title}>
      <Book book={book}></Book>
    </div>
  ));
};

export default BookList;
