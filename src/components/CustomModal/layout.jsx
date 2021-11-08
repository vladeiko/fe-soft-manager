import React from 'react';

const CustomModalLayout = ({ title = null, subtitle = null, children = null, contentStyle = 'antd-modal-content' }) => {
  return (
    <>
      <div className="antd-modal-header">
        <h3>{title}</h3>
        <span>{subtitle}</span>
      </div>
      <div className={contentStyle}>{children}</div>
    </>
  );
};

export default CustomModalLayout;
