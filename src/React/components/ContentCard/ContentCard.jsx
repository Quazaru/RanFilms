import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';

import './ContentCard.scss';
const WatchingPath = '../../../assets/img/';
const imgPath = './../static/assets/img/';

const ContentCard = ({data}) => {
  
    if(!data) {
      return <LoadingSpinner />
    } else {
      const {title, url, id, description, genre, year, city} = data;
      return (
        <div className="content-card" key={id}>
          <div className="content-card__preview">
            <img src={`${imgPath}previews/${url}.png`} alt={title + "-preview"}/>
          </div>
          <div className="content-card__body">
            <div className="content-card__title">
              <p>{title}</p>
            </div>
            <div className="content-card__description"><p>{description}</p></div>
          </div>
          <div className="content-card__footer">
            <div className="content-card__genres">
              <p>
              {genre}
              </p>
            </div>
            <ul>
              <li>
                <div className="content-card__attribute ">
                  {city}
                </div>
              </li>
              <li>
                <div className="content-card__attribute ">
                <div className="sub_icon">
                    <img src={`${imgPath}icons/date.svg`} alt=""/>
                  </div>
                  {year}
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    }
    
}

export default ContentCard;
