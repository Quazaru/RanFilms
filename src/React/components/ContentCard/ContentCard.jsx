import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';

import './ContentCard.scss';
import variables from '../../../js/_variables';
const { imgPath } = variables;

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
            <div className="content-card__header">
              <div className="content-card__title">
                <p>{` ( ${year} )  ` }{title}</p>
              </div>
              <div className="content-card__genres">
                <p>
                {genre}
                </p>
              </div>
            </div>
            <div className="content-card__description"><p>{description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt accusantium tempora laudantium error veniam dolor inventore ratione modi voluptas, consectetur necessitatibus sunt, obcaecati facere delectus eos aut exercitationem sint voluptatem doloribus quod optio. Rem fuga enim reprehenderit mollitia illum pariatur, provident nesciunt consectetur dolor exercitationem assumenda similique unde non, cumque illo quasi! Quasi quas consequatur modi et eius sed aliquid molestias error magni expedita, nulla suscipit voluptatibus recusandae numquam officia quis odit doloremque incidunt? Aliquid perferendis, perspiciatis natus odio error, sunt totam accusantium molestias magnam voluptates blanditiis hic quisquam veritatis ipsum quod odit pariatur nulla. Fugit consequatur reiciendis quisquam officia! </p></div>
          </div>
          <div className="content-card__footer">
            
            <ul>

              <li></li>
              <li></li>
              <li>
                <div className="content-card__attribute ">
                  {city}
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    }
    
}

export default ContentCard;
