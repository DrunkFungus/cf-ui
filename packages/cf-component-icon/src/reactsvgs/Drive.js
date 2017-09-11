import React from 'react';
import PropTypes from 'prop-types';

const Drive = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <rect x="11.243" y="10.987" width="1.11" height="1.11" />
    <rect x="11.243" y="6.185" width="1.11" height="1.11" />
    <path d="M14.523,4.848a1.033,1.033,0,0,0-.112-.429H14.4L12.264,1.651H3.745L1.58,4.419h.015a.9.9,0,0,0-.117.43V8.634a.914.914,0,0,0,.155.508v0a.914.914,0,0,0-.154.506v3.785a.915.915,0,0,0,.914.914H13.608a.915.915,0,0,0,.914-.914V9.649a1.168,1.168,0,0,0-.149-.517.907.907,0,0,0,.149-.5Zm-1.092,8.407H2.571V9.827h10.86Zm0-4.8H2.571V5.026h10.86Z" />
  </svg>
);

Drive.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Drive;
