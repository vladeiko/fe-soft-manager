import { useState, forwardRef, useImperativeHandle } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Input } from 'antd';

import { addComputerThunk } from '../../../store/computers';

import { CustomModal } from '../../../components';

const AddComputerModal = ({ title, subtitle }, ref) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

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
    await dispatch(addComputerThunk(values));
    setVisible(false);
  };

  const handleCancel = () => setVisible(false);

  return (
    <CustomModal visible={visible} onOk={handleOk} onCancel={handleCancel} title={title} subtitle={subtitle}>
      <Form form={form} layout="vertical" className="sign-in-form" onFinish={handleSubmit}>
        <Form.Item
          name="location"
          label="Расположение"
          rules={[
            {
              required: true,
              message: 'Please input location!',
            },
          ]}>
          <Input placeholder="Комната 322..." />
        </Form.Item>
        <Form.Item
          name="owner"
          label="Владелец"
          rules={[
            {
              required: true,
              message: 'Please input location!',
            },
          ]}>
          <Input placeholder="Василий Андреевич Иванов..." />
        </Form.Item>
        <Form.Item
          name="mac_address"
          label="MAC-адрес"
          rules={[
            {
              required: true,
              message: 'Please input MAC-address!',
            },
          ]}>
          <Input placeholder="02:11:B6:5A:AA:6P" />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export default forwardRef(AddComputerModal);
