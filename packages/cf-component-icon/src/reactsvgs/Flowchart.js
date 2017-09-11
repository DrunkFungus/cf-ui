import React from 'react';
import PropTypes from 'prop-types';

const Flowchart = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <polygon points="13.311 10.353 13.311 7.784 13.311 7.784 8.498 7.784 8.498 5.648 10.173 5.648 10.173 1.41 5.937 1.41 5.937 5.648 7.63 5.648 7.63 7.784 2.689 7.784 2.689 10.353 1.004 10.353 1.004 14.59 5.242 14.59 5.242 10.353 3.557 10.353 3.557 8.652 12.443 8.652 12.443 10.353 10.758 10.353 10.758 14.59 14.996 14.59 14.996 10.353 13.311 10.353" />
  </svg>
);

Flowchart.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Flowchart;
