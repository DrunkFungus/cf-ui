import React from 'react';
import PropTypes from 'prop-types';

const Calendar = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <rect x="2.514" y="10.968" width="4.383" height="2.143" />
    <rect x="9.263" y="10.968" width="4.383" height="2.143" />
    <rect x="2.514" y="6.641" width="4.383" height="2.143" />
    <rect x="9.263" y="6.641" width="4.383" height="2.143" />
    <path d="M14.23,2.554h-.872v-1.3h-2.32v1.3H5.223v-1.3H2.9v1.3H1.77a.919.919,0,0,0-.919.919V13.828a.919.919,0,0,0,.919.918H14.23a.919.919,0,0,0,.919-.918V3.473A.919.919,0,0,0,14.23,2.554Zm0,11.436H1.77a.162.162,0,0,1-.162-.162V5.179H14.392v8.65A.162.162,0,0,1,14.23,13.99Z" />
  </svg>
);

Calendar.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Calendar;
