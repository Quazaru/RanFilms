import React from 'react';
import variables from '../../../js/_variables';
const {imgPath} = variables;  
const LoadingSpinner = () => {
  return (
      <div className="loading-spinner">
        <div className="loading-spinner__header">Загрузка..</div>
        <img src={`${imgPath}loading-spinner.svg`} alt="loading-spinner"/>
      </div>
  )
}

export default LoadingSpinner;