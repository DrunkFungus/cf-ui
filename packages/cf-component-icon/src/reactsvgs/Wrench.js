import React from 'react';
import PropTypes from 'prop-types';

const Wrench = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M14.417,3.979,11.085,7.312,8.677,4.9l3.328-3.328A4.791,4.791,0,0,0,5.344,6.845a2.39,2.39,0,0,1-.665,2.069h0l-3.52,3.52L3.565,14.84l3.521-3.518a2.391,2.391,0,0,1,2.1-.661,4.79,4.79,0,0,0,5.234-6.682Z" />
  </svg>
);

Wrench.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Wrench;
