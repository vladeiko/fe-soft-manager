import { useState, forwardRef, useImperativeHandle } from 'react';
import { useDispatch } from 'react-redux';

import { deleteComputerThunk } from '../../../store/computers';

import { CustomModal } from '../../../components';

const DeleteComputerModal = ({ title, subtitle }, ref) => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const [computerId, setComputerId] = useState(null);

  useImperativeHandle(ref, () => ({
    openModal: (computerId) => {
      setVisible(true);
      setComputerId(computerId);
    },
  }));

  const handleOk = async () => {
    await dispatch(deleteComputerThunk(computerId));
    setVisible(false);
  };

  const handleCancel = () => setVisible(false);

  return (
    <CustomModal visible={visible} onOk={handleOk} onCancel={handleCancel} title={title} subtitle={subtitle}>
      <span>Точно уверены?</span>
    </CustomModal>
  );
};

export default forwardRef(DeleteComputerModal);
