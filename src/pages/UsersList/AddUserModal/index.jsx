import { useState, forwardRef, useImperativeHandle } from 'react';

import { Form, Input } from 'antd';

import { CustomModal } from '../../../components';

const AddUserModal = ({ title, subtitle, setUsers }, ref) => {
  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setVisible(true);
    },
  }));

  const handleOk = async () => {
    form.submit();
  };

  const handleSubmit = async (values) => {
    setUsers((prev) => [...prev, { id: (Math.random() * 100).toFixed(0), ...values }] );
    form.resetFields();
    setVisible(false);
  };

  const handleCancel = () => setVisible(false);

  return (
    <CustomModal visible={visible} onOk={handleOk} onCancel={handleCancel} title={title} subtitle={subtitle}>
      <Form form={form} layout="vertical" className="sign-in-form" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Имя"
          rules={[
            {
              required: true,
              message: 'Please input name!',
            },
          ]}>
          <Input placeholder="Сейт-Акаев Руслан Игремович" />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
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
              message: 'Please input your password!',
            },
          ]}>
          <Input.Password />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export default forwardRef(AddUserModal);
