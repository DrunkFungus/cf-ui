import React from 'react';
import PropTypes from 'prop-types';

const Hamburger = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M14.3,1.7V4.22H1.7V1.7ZM1.7,14.3H14.3V11.78H1.7Zm0-5.04H14.3V6.74H1.7Z" />
  </svg>
);

Hamburger.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Hamburger;
