import React from 'react';
import PropTypes from 'prop-types';

const Clipboard = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M13.073,2.045H11.729V3.608H4.487V2.045H2.927a.576.576,0,0,0-.574.574V13.978a.576.576,0,0,0,.574.574H13.073a.576.576,0,0,0,.574-.574V2.619A.576.576,0,0,0,13.073,2.045ZM8.028,11.929H4.891V10.8H8.028Zm3.109-2.611H4.865V8.187h6.272Zm0-2.612H4.865V5.575h6.272Z" />
    <rect x="5.238" y="1.448" width="5.525" height="1.342" />
  </svg>
);

Clipboard.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Clipboard;
