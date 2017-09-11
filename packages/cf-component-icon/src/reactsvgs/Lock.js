import React from 'react';
import PropTypes from 'prop-types';

const Lock = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M12,6.363l0-1.708,0-.024a3.7,3.7,0,0,0-1.263-2.552,4.176,4.176,0,0,0-5.467,0A3.7,3.7,0,0,0,4,4.631l0,.024L4,6.363H1.875V14.94H14.125V6.363H12Zm-3.327,4.43v2.12H7.326v-2.12a1.33,1.33,0,1,1,1.346,0ZM5.72,6.363l0-1.644a1.972,1.972,0,0,1,.683-1.351,2.459,2.459,0,0,1,3.191,0,1.974,1.974,0,0,1,.683,1.351l0,1.644Z" />
  </svg>
);

Lock.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Lock;
