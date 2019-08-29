import React from 'react';
import PropTypes from 'prop-types';
import img from './error-image.png';
import './ErrorIndicator.css';

function ErrorIndicator({ err }) {
  function errInfo() {
    if (err) {
      return <span className="err-info">{err}</span>;
    }
    return null;
  }
  return (
    <div className="error-indicator">
      {errInfo()}
      <img src={img} alt="error" />
      <span>Something is wrong!</span>
      <span>We will fix it soon</span>
    </div>
  );
}

ErrorIndicator.propTypes = {
  err: PropTypes.string.isRequired,
};

export default ErrorIndicator;
