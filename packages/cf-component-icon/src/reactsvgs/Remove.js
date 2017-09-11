import React from 'react';
import PropTypes from 'prop-types';

const Remove = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <polygon points="14.3 3.625 12.375 1.7 8 6.075 3.625 1.7 1.7 3.625 6.075 8 1.7 12.375 3.625 14.3 8 9.925 12.375 14.3 14.3 12.375 9.925 8 14.3 3.625" />
  </svg>
);

Remove.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Remove;
