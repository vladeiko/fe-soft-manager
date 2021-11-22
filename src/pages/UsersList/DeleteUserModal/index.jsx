import { useState, forwardRef, useImperativeHandle } from 'react';

import { CustomModal } from '../../../components';

const DeleteUserModal = ({ title, subtitle, setUsers }, ref) => {
  const [visible, setVisible] = useState(false);

  const [userId, setUserId] = useState(null);

  useImperativeHandle(ref, () => ({
    openModal: (userId) => {
      setVisible(true);
      setUserId(userId);
    },
  }));

  const handleOk = async () => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
    setVisible(false);
  };

  const handleCancel = () => setVisible(false);

  return (
    <CustomModal visible={visible} onOk={handleOk} onCancel={handleCancel} title={title} subtitle={subtitle}>
      <span>Точно уверены?</span>
    </CustomModal>
  );
};

export default forwardRef(DeleteUserModal);
