import React from 'react';
import PropTypes from 'prop-types';

const Happy = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M8,12.643a4.638,4.638,0,0,0,4.167-2.606l-.943-.461a3.587,3.587,0,0,1-6.449,0l-.943.461A4.638,4.638,0,0,0,8,12.643Z" />
    <path d="M5.4,5.721a.949.949,0,0,0-.948.948A.948.948,0,1,0,5.4,5.721Z" />
    <path d="M10.794,5.744a.946.946,0,1,0,.745.925A.946.946,0,0,0,10.794,5.744Z" />
    <path d="M14.756,5.691A7.135,7.135,0,1,0,15.14,8,7.141,7.141,0,0,0,14.756,5.691ZM13.725,10.8A6.374,6.374,0,1,1,14.372,8,6.395,6.395,0,0,1,13.725,10.8Z" />
  </svg>
);

Happy.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Happy;
