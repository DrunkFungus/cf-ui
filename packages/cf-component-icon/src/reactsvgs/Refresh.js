import React from 'react';
import PropTypes from 'prop-types';

const Refresh = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M14.565,1.634l-1.4,1.4a7.052,7.052,0,1,0,1.286,8.163l-1.228-.614a5.679,5.679,0,1,1-1.041-6.6L12.2,4,11,5.2a.187.187,0,0,0,.132.32H14.7a.187.187,0,0,0,.188-.187V1.766A.187.187,0,0,0,14.565,1.634Z" />
  </svg>
);

Refresh.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Refresh;
