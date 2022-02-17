import React from 'react';
import WriterList from '../../components/organisms/WriterList';

const WriterListContainer = () => {
  // const { loading, error, data } = useQuery(BOOK_TITLES);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <>
      <WriterList/>
    </>
  );
};

export default WriterListContainer;
