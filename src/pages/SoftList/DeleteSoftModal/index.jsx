import { useState, forwardRef, useImperativeHandle } from 'react';
import { useDispatch } from 'react-redux';

import { deleteSoftThuk } from '../../../store/soft';

import { CustomModal } from '../../../components';

const DeleteSoftModal = ({ title, subtitle }, ref) => {
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
    await dispatch(deleteSoftThuk(softId));
    setVisible(false);
  };

  const handleCancel = () => setVisible(false);

  return (
    <CustomModal visible={visible} onOk={handleOk} onCancel={handleCancel} title={title} subtitle={subtitle}>
      <span>Точно уверены?</span>
    </CustomModal>
  );
};

export default forwardRef(DeleteSoftModal);
