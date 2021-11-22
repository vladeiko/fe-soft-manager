import { useState, forwardRef, useImperativeHandle } from 'react';
import { useDispatch } from 'react-redux';

import { removeSoftFromComputerThunk } from '../../../store/computers';

import { CustomModal } from '../../../components';

const RemoveSoftModal = ({ title, subtitle, computerId }, ref) => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const [softId, setSoftId] = useState(null);

  useImperativeHandle(ref, () => ({
    openModal: (softId) => {
      setVisible(true);
      setSoftId(softId);
    },
  }));

  const handleOk = async () => {
    await dispatch(removeSoftFromComputerThunk({ computerId, softId }));
    setVisible(false);
  };

  const handleCancel = () => setVisible(false);

  return (
    <CustomModal visible={visible} onOk={handleOk} onCancel={handleCancel} title={title} subtitle={subtitle}>
      <span>Точно уверены?</span>
    </CustomModal>
  );
};

export default forwardRef(RemoveSoftModal);
