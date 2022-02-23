import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { BOOK_TITLES } from '../../appolo/typeDefs';
import { Typography } from 'antd';
import BookList from '../../components/organisms/BookList';
import BookOption from '../../components/organisms/BookOptions';
import { buildGrapQlVariables } from '../../utils/convertUtils/queryUtils';

const { Title } = Typography;

const BookListContainer = () => {
  const [options, setOptions] = useState();
  const bookOpHandler = (options) => {
    setOptions(options);
  };

  return (
    <>
      {!options ? (
        <>
          <Title level={3}>Book Options:</Title>
          <BookOption onSubmit={(options) => bookOpHandler(options)} />
        </>
      ) : null}

      <Title level={3}>Books List:</Title>
      <>{!options ? <p>Please select and submit options</p> : <Books options={options} />}</>
    </>
  );
};

const Books = (props) => {
  const { options } = props;
  const queryVariables = buildGrapQlVariables(options);
  console.log(queryVariables);
  const { loading, error, data } = useQuery(
    BOOK_TITLES,
    { variables: queryVariables },
    { fetchPolicy: 'cache-and-network' },
  );

  return (
    <>
      <BookList loading={loading} error={error} data={data} />
    </>
  );
};

export default BookListContainer;
