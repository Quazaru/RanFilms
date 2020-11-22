import React from 'react';
import './ErrorIndicator.scss';
import variables from '../../../js/_variables';
const { imgPath } = variables;
const ErrorIndicator = ({message}) => {
  return (
    <div className="error-indicator">
      <div className="error-indicator__body">
        <div className="error-indicator__image">
          <img src={`${imgPath}icons/error.svg`} alt="error-image"/>
        </div>
        <p className="error-indicator__text">
          {message}
        </p>
      </div>
    </div>
  )
}

export default ErrorIndicator;
