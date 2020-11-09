import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';

import './ContentCard.scss';
const WatchimgPath = '../../../assets/img/';
const imgPath = './../static/assets/img/';

const ContentCard = ({data}) => {
  
    if(!data) {
      return <LoadingSpinner />
    } else {
      const {title, url, id, thumbnailUrl} = data;
      return (
        <div className="content-card" key={id}>
          <div className="content-card__preview">
            <img src={url} alt={title + "-preview"}/>
          </div>
          <div className="content-card__body">
            <div className="content-card__title">
              <p>{title}</p>
            </div>
            <div className="content-card__description"><p>{title + title + title + title + + " " + title}</p></div>
          </div>
          <div className="content-card__footer">
            <ul>
              <li>
                <div className="content-card__attribute">
                  <div className="sub_icon">
                    <img src={`${imgPath}icons/views.svg`} alt=""/>
                  </div>
                  {id * 12}
                </div>
              </li>
              <li>
                <div className="content-card__attribute ">
                <div className="sub_icon">
                    <img src={`${imgPath}icons/star.svg`} alt=""/>
                  </div>
                  {id > 10 ? id/10 : id + 1}
                </div>
              </li>
              <li>
                <div className="content-card__attribute ">
                <div className="sub_icon">
                    <img src={`${imgPath}icons/date.svg`} alt=""/>
                  </div>
                  {id + 2005}
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    }
    
}

export default ContentCard;
