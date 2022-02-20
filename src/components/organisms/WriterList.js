import React from 'react';
import Writer from '../molecules/Writer';

const WriterList = (props) => {
  const { loading, error, data } = props;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.writers.map((writer) => (
    <div key={writer.name}>
      <Writer writer={writer}></Writer>
    </div>
  ));
};

export default WriterList;
