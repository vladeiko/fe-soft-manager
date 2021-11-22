import { useState, forwardRef, useImperativeHandle } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Input, Select } from 'antd';

import { addSoftThunk } from '../../../store/soft';

import { CustomModal } from '../../../components';

import softTypes from '../../../constants/softTypes';
import licenseTypes from '../../../constants/licenseTypes';

const AddSoftModal = ({ title, subtitle }, ref) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [subTypes, setSubTypes] = useState([]);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setVisible(true);
    },
  }));

  const handleOk = async () => {
    form.submit();
  };

  const handleSubmit = async (values) => {
    await dispatch(addSoftThunk(values));
    setVisible(false);
  };

  const handleCancel = () => setVisible(false);
  const handleSoftTypeChange = (name) => setSubTypes(softTypes.find((softType) => softType.name === name).subTypes);

  return (
    <CustomModal visible={visible} onOk={handleOk} onCancel={handleCancel} title={title} subtitle={subtitle}>
      <Form form={form} layout="vertical" className="sign-in-form" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Название"
          rules={[
            {
              required: true,
              message: 'Please input soft name!',
            },
          ]}>
          <Input placeholder="VS Code" />
        </Form.Item>
        <Form.Item
          name="type"
          label="Тип"
          rules={[
            {
              required: true,
              message: 'Please select type!',
            },
          ]}>
          <Select onChange={handleSoftTypeChange}>
            {softTypes.map((softType) => (
              <Select.Option key={softType.name} value={softType.name}>
                {softType.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="sub_type"
          label="Подтип"
          rules={[
            {
              required: true,
              message: 'Please select sub type!',
            },
          ]}>
          <Select>
            {subTypes.map((subType) => (
              <Select.Option key={subType.name} value={subType.name}>
                {subType.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="license_type"
          label="Тип лицензии"
          rules={[
            {
              required: true,
              message: 'Please input license_type!',
            },
          ]}>
          <Select>
            {licenseTypes.map((licenseType) => (
              <Select.Option key={licenseType} value={licenseType}>
                {licenseType}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export default forwardRef(AddSoftModal);
