import React from 'react';
import Options from '../molecules/Options';

const WriterOption = (props) => {
  const { onSubmit } = props;

  const onFinish = (values) => {
    onSubmit(values);
  };

  const availabelOptions = [
    { label: 'Name', value: 'name', disabled: true },
    { label: 'Country', value: 'country' },
    { label: 'Date of Birth', value: 'dateOfBirth' },
    { label: 'Books', value: 'books' },
  ];

  const initialValues = { writerOptions: ['name'] };

  return (
    <>
      <Options
        formName={'writerOptions'}
        options={availabelOptions}
        initialValues={initialValues}
        onSubmit={(options) => onFinish(options)}
      ></Options>
    </>
  );
};

export default WriterOption;
