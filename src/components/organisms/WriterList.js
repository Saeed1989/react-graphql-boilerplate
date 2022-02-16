import React from 'react';
import { useQuery } from '@apollo/client';
import { WRITER_NAMES } from '../../appolo/typeDefs';
import Writer from '../molecules/Writer';

const WriterList = () => {
  const { loading, error, data } = useQuery(WRITER_NAMES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.writers.map((writer) => (
    <div key={writer.name}>
      <Writer writer={writer}></Writer>
    </div>
  ));
};

export default WriterList;
