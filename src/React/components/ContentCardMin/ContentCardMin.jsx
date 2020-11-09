import React from 'react';
import './ContentCardMin.scss';
const WatchimgPath = '../../../assets/img/';
const imgPath = './../static/assets/img/';
const ContentCardMin = ({data}) => {
  const {title, url } = data;
  return (
    <div className="content-card_min">
      <div className="content-card_min__preview">
        <img src={url} alt={title + "-preview"}/>
      </div>
      <div className="content-card_min__title">
        <p>{title}</p>
      </div>
      <ul className="content-card_min__btns">
        <li>
          <div className="content-card_min__settings-btn">
            <img src={`${imgPath}icons/delete.svg`} alt=""/>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ContentCardMin;
