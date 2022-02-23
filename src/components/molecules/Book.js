import React from 'react';
import { toFormattedDate } from '../../utils/convertUtils/convertUtils';
import LvItem from '../atoms/LvItem';

const Book = (props) => {
  const { book } = props;
  return (
    <>
      <LvItem label={'Title'} value={book.title} />
      <LvItem label={'Author'} value={book.author} />
      <LvItem label={'Edition'} value={book.edition} />
      <LvItem label={'Publication Date'} value={toFormattedDate(book.publishDate)} />
    </>
  );
};

export default Book;
