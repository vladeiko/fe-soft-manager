import React from 'react';
import PropTypes from 'prop-types';

const CustomModalLayout = ({ title, subtitle, children, contentStyle }) => {
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

CustomModalLayout.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  children: PropTypes.node,
  contentStyle: PropTypes.string,
};

CustomModalLayout.defaultProps = {
  title: null,
  subtitle: null,
  children: null,
  contentStyle: 'antd-modal-content',
};

export default CustomModalLayout;
