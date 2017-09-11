import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M14.331,4.03V1.63H1.669v2.4h0L6.661,7.715V12.53l2.678,1.84V7.715L14.331,4.03Zm-1.007-.463H2.653V2.475H13.325Z" />
  </svg>
);

Filter.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Filter;
