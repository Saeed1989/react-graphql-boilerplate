import React from 'react';
import Book from '../molecules/Book';
import { Typography } from 'antd';

const { Title } = Typography;

const BookList = (props) => {
  const { loading, error, data } = props;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map((book, index) => (
    <div key={index}>
      <Title level={4}>{index + 1}</Title>
      <Book book={book}></Book>
    </div>
  ));
};

export default BookList;
