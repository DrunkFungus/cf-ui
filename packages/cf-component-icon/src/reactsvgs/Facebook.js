import React from 'react';
import PropTypes from 'prop-types';

const Facebook = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M10.6,2.729V4.575h-1.1a1.027,1.027,0,0,0-.811.252,1.161,1.161,0,0,0-.21.755V6.9h2.049l-.273,2.07H8.485v5.308H6.346V8.974H4.562V6.9H6.346V5.379a2.706,2.706,0,0,1,.727-2.018A2.638,2.638,0,0,1,9.01,2.645a11.581,11.581,0,0,1,1.594.084Z" />
  </svg>
);

Facebook.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Facebook;
