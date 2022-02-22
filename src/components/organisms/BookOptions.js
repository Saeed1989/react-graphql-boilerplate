import React from 'react';
import Options from '../molecules/Options';

const BookOption = (props) => {
  const { onSubmit } = props;

  const onFinish = (values) => {
    onSubmit(values);
  };

  const availabelOptions = [
    { label: 'Title', value: 'title', disabled: true },
    { label: 'Edition', value: 'edition' },
    { label: 'Publish Date', value: 'publishDate' },
    { label: 'Author', value: 'author' },
  ];

  const initialValues = { bookOptions: ['title'] };

  return (
    <Options
      formName={'bookOptions'}
      options={availabelOptions}
      initialValues={initialValues}
      onSubmit={(options) => onFinish(options)}
    ></Options>
  );
};

export default BookOption;
