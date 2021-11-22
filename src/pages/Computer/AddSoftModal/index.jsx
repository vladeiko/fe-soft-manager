import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Select } from 'antd';

import { addSoftToComputerThunk } from '../../../store/computers';
import { getAllSoftThunk } from '../../../store/soft';

import { CustomModal } from '../../../components';

const AddSoftModal = ({ title, subtitle, currentComputer }, ref) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const softList = useSelector((state) => state.soft.soft);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setVisible(true);
    },
  }));

  useEffect(() => {
    dispatch(getAllSoftThunk());
  }, []);

  const handleOk = async () => {
    form.submit();
  };

  const handleSubmit = async (values) => {
    await dispatch(addSoftToComputerThunk({ computer_id: currentComputer.id, soft_id: values.softId }));
    form.resetFields();
    setVisible(false);
  };

  const handleCancel = () => setVisible(false);

  return (
    <CustomModal visible={visible} onOk={handleOk} onCancel={handleCancel} title={title} subtitle={subtitle}>
      <Form form={form} layout="vertical" className="sign-in-form" onFinish={handleSubmit}>
        <Form.Item
          name="softId"
          label="Выберите ПО"
          rules={[
            {
              required: true,
              message: 'Please select soft!',
            },
          ]}>
          <Select>
            {softList.map((soft) => {
              if (currentComputer?.soft?.find((s) => s.id === soft.id)) return null;

              return (
                <Select.Option key={soft.id} value={soft.id}>
                  {soft.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export default forwardRef(AddSoftModal);
