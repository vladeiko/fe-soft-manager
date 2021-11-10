import React from 'react';
import { Modal } from 'antd';
import CustomModalLayout from './layout';

import './style.scss';

const CustomModal = ({
  visible = false,
  onCancel = () => {},
  onOk = () => {},
  title = null,
  subtitle = null,
  children = null,
  okText = undefined,
  cancelText = undefined,
  width = undefined,
  okButtonProps = undefined,
  buttons = true,
  className = 'antd-modal-styled',
  centered = true,
  footer = undefined,
  closable = true,
  hideCancelButton = false,
  hideOkButton = false,
  destroyOnClose = false,
}) => {
  const modalStyle = buttons ? className : `${className} antd-confirm-modal-wo-buttons`;
  const contentStyle = buttons ? 'antd-modal-content' : 'antd-modal-content pd-b-20-f';

  const hideButtonStyle = { style: { display: 'none' } };

  return (
    <Modal
      title={null}
      icon={null}
      width={width}
      className={modalStyle}
      maskClosable
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      cancelButtonProps={(!buttons || hideCancelButton) && hideButtonStyle}
      okButtonProps={!buttons || hideOkButton ? hideButtonStyle : okButtonProps}
      okText={okText}
      cancelText={cancelText}
      centered={centered}
      footer={footer}
      closable={closable}
      destroyOnClose={destroyOnClose}>
      <CustomModalLayout title={title} subtitle={subtitle} contentStyle={contentStyle}>
        {children}
      </CustomModalLayout>
    </Modal>
  );
};

export default React.memo(CustomModal);
