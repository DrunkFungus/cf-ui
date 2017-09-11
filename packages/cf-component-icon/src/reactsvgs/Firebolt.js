import React from 'react';
import PropTypes from 'prop-types';

const Firebolt = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M13.539,6.5a7.07,7.07,0,0,0-1.85-.961L.836,1.358l.86,1.99L8.3,5.98l.65.259L8.525,7.348,7.207,6.823,2.654,5.011,3.748,6.98,6.371,8.029,8.929,9.052,8.5,10.161,6,9.188l-1.286-.5a13.362,13.362,0,0,0,2.125,4.093,4.615,4.615,0,0,0,3.706,1.86l.1,0a4.62,4.62,0,0,0,2.9-8.136Z" />
  </svg>
);

Firebolt.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Firebolt;
