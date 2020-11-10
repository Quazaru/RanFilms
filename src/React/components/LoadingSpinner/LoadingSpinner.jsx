import React from 'react';

const imgPath = './../static/assets/img/';
const watchImgPath = "../../../assets/img/";

const LoadingSpinner = () => {
  return (
      <div className="loading-spinner">
        <div className="loading-spinner__header">Загрузка..</div>
        <img src={`${imgPath}loading-spinner.svg`} alt="loading-spinner"/>
      </div>
  )
}

export default LoadingSpinner;