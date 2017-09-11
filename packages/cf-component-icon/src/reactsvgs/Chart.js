import React from 'react';
import PropTypes from 'prop-types';

const Chart = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M7.325,7.359V1.349a7.011,7.011,0,0,0-6.01,6.01Zm7.36,1.485a5.708,5.708,0,0,1-5.739,5.807A5.852,5.852,0,0,1,3.07,8.709h5.6V3.037A5.853,5.853,0,0,1,14.685,8.844Z" />
  </svg>
);

Chart.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Chart;
