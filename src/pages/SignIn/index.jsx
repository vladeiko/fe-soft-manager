import React from 'react';
import { Form, Button, Input } from 'antd';


import './style.scss';

const SignInPage = () => {
  return (
    <div className="signin-page">
      <div className="description">
        <span className="description__title">Войти</span>
        <span className="description__note">Добро пожаловать! Войдите, чтобы продолжить</span>
      </div>
      <Form layout="vertical" className="sign-in-form">
        <Form.Item 
          name="email" 
          label="E-mail"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Button className="sign-in-form__button" type="primary" htmlType="submit">Войти</Button>
      </Form>
    </div>
  );
};

export default SignInPage;
