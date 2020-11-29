import React from 'react';
import './ContentCardMin.scss';
import variables from '../../../js/_variables';
const { imgPath } = variables;
const ContentCardMin = ({data}) => {
  const {title, url } = data;
  return (
    <div className="content-card_min">
      <div className="content-card_min__preview">
      <img src={`${imgPath}previews/${url}.png`} srcSet={`${imgPath}previews/no-image.svg`} alt={title + "-preview"}/>
      </div>
      <div className="content-card_min__title">
        <p>{title}</p>
      </div>
      <ul className="content-card_min__btns">
        <li>
          <div className="content-card_min__settings-btn">
            <img src={`${imgPath}icons/delete.svg`} alt="img-delete"/>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ContentCardMin;
