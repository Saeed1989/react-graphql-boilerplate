import React from 'react';
import { arrayToString, toFormattedDate } from '../../utils/convertUtils/convertUtils';
import LvItem from '../atoms/LvItem';

const Writer = (props) => {
  const { writer } = props;
  return (
    <>
      <LvItem label={'Name'} value={writer.name} />
      <LvItem label={'Country'} value={writer.country} />
      <LvItem label={'Date of Birth'} value={toFormattedDate(writer.dateOfBirth)} />
      <LvItem label={'Books'} value={arrayToString(writer.books)} />
    </>
  );
};

export default Writer;
