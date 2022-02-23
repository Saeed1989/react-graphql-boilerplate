import React from 'react';
import LvItem from '../atoms/LvItem';

const Writer = (props) => {
  const { writer } = props;
  return (
    <>
      <LvItem label={'Name'} value={writer.name} />
      <LvItem label={'Country'} value={writer.country} />
      <LvItem label={'Date of Birth'} value={writer.dateOfBirth} />
      <LvItem label={'Books'} value={writer.books} />
    </>
  );
};

export default Writer;
