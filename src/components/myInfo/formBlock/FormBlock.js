import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Checkbox } from 'antd';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 6,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const FormBlock = () => {
  return (
    <Form
    {...layout}
    name="basic"
    initialValues={{
      remember: true,
    }}
    >
    <Form.Item
    label="User Name"
    name="username"
    rules={[
      {
        required: true,
        message: 'Please input 2-15 symbols your username!',
      },
    ]}
    >
    <Input />
    </Form.Item>

    <Form.Item
    name={['user', 'email']}
    label="Email"
    rules={[
      {
        type: 'email',
        required: true
      },
    ]}
    >
    <Input />
    </Form.Item>

    <Form.Item
    label="Last Name"
    name="lastname"
    >
    <Input />
    </Form.Item>

    <Form.Item
    label="First Name"
    name="firstname"
    >
    <Input />
    </Form.Item>

    <Form.Item
    name="password"
    label="New Password"
    rules={[
      {
        required: true,
        message: 'Please input your password!',
      },
    ]}
    hasFeedback
    >
    <Input.Password />
    </Form.Item>

    <Form.Item
    name="confirm"
    label="Repeat New Password"
    dependencies={['password']}
    hasFeedback
    rules={[
      {
        required: true,
        message: 'Please confirm your password!',
      },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }

          return Promise.reject('The two passwords that you entered do not match!');
        },
      }),
    ]}
    >
    <Input.Password />
    </Form.Item>
    </Form>
  );
};

export default FormBlock
