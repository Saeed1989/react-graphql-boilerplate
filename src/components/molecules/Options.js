import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const Options = (props) => {
  const {onSubmit, options, initialValues, formName} = props;

  const onFinish = (values) => {
    console.log('Success:', values);
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
      <Form.Item name={formName} wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox.Group options={options} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Options;
