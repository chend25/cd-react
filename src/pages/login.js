/*
 * @Date: 2022-08-06 22:04:23
 * @LastEditors: chend25
 * @LastEditTime: 2022-09-13 23:54:44
 * @FilePath: \cd-react\src\pages\login.js
 */
import { Button, Checkbox, Form, Input } from 'antd';
import { Component } from "react";

import "@/styles/login.scss"
export default class Login extends Component {
  onFinish(values) {
    console.log('Success:', values);
  };

  onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <Form
        className="login-form"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={(val) => this.onFinish(val)}
        onFinishFailed={(val) => this.onFinishFailed(val)}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}