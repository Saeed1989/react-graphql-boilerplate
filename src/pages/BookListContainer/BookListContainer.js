import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { BOOK_TITLES } from '../../appolo/typeDefs';
import { Typography } from 'antd';
import BookList from '../../components/organisms/BookList';
import BookOption from '../../components/organisms/BookOptions';

const { Title } = Typography;

const BookListContainer = () => {
  const [options, setOptions] = useState();
  const bookOpHandler = (options) => {
    setOptions(options);
  };
  
  return (
    <>
      <Title level={3}>Book Options:</Title>
      <BookOption onSubmit={(options) => bookOpHandler(options)}/>
      <Title level={3}>Books List:</Title>
      <>{!options ? <p>Please select and submit options</p> : <Books options={options} />}</>
    </>
  );
};

const Books = (props) => {
  const { options } = props;
  const { loading, error, data } = useQuery(BOOK_TITLES, { fetchPolicy: 'cache-and-network' });

  return (
    <>
      <BookList loading={loading} error={error} data={data} />
    </>
  );
};

export default BookListContainer;
