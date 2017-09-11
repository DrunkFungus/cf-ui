import React from 'react';
import PropTypes from 'prop-types';

const ResizeHorizontal = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M6.847,4.184,3.1,7.931a.279.279,0,0,0,0,.394l3.746,3.746a.279.279,0,0,0,.476-.2V4.381A.279.279,0,0,0,6.847,4.184Z" />
    <path d="M9.3,4.206l3.746,3.746a.279.279,0,0,1,0,.394L9.3,12.093a.279.279,0,0,1-.476-.2V4.4A.279.279,0,0,1,9.3,4.206Z" />
  </svg>
);

ResizeHorizontal.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default ResizeHorizontal;
