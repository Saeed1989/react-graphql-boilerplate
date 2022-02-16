import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Book = (props) => {
  const { book } = props;
  return (
    <>
      <Title level={4}>{book.title}</Title>
    </>
  );
};

export default Book;
