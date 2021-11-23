import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Input } from 'antd';

import { signInThunk } from '../../store/user';

import './style.scss';

const SignInPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.user.isLoading);

  const handleSubmit = (values) => {
    dispatch(signInThunk(values));
  };

  return (
    <div className="signin-page">
      <div className="description">
        <span className="description__title">Войти</span>
        <span className="description__note">Добро пожаловать! Войдите, чтобы продолжить</span>
      </div>
      <Form layout="vertical" className="sign-in-form" onFinish={handleSubmit} validateTrigger="onSubmit">
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              required: true,
              message: 'Please input valid your username!',
            },
          ]}>
          <Input placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input valid your password!',
            },
          ]}>
          <Input.Password />
        </Form.Item>
        <Button className="sign-in-form__button" type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form>
    </div>
  );
};

export default SignInPage;
