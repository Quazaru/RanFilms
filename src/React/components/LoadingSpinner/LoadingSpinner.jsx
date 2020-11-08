import React from 'react';

const LoadingSpinner = () => {
  return (
      <div className="loading-spinner">
        <div className="loading-spinner__header">Загрузка..</div>
        <img src="../../../assets/img/loading-spinner.svg" alt="loading-spinner"/>
      </div>
  )
}

export default LoadingSpinner;