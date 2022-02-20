import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const BookOption = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const plainOptions = [
    { label: 'Title', value: 'title', disabled: true },
    { label: 'Edition', value: 'edition' },
    { label: 'Publish Date', value: 'publishDate' },
    { label: 'Author', value: 'author' },
  ];

  const initialValues = { writerOptions: ['title'] };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item name="writerOptions" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox.Group options={plainOptions} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookOption;
