import React, {useState, useEffect} from 'react';
import ContentCard from '../ContentCard/ContentCard';
import withContentDataService from '../../HOC/withContentDataService.jsx';
const imgPath = '../../../assets/img';

import './RandomGenerator.scss';

const RandomGenerator = ({service}) => {
  const [data, setData] = useState(null);
  const [id, setId] = useState(getRandom(0, 100))
  useEffect(() => {
    service.getDataById(id)
    .then(res => {
      setData(res);
    });
  }, [id]);
  

    return (
      <div className="generator">
        <div className="generator__title">
          Случайный фильм:
        </div>
        <ContentCard data={data} />
        <div className="generator__btns">
          <div className="generator__btn generator__btn_next main-btn" onClick={() => {
            setId(getRandom(0, 100))
          }}>
            <div className="sub_icon">
              <img src={`${imgPath}/icons/next.svg`} alt=""/>
            </div>
            <p>Следующий</p>
          </div>
          <div className="generator__btn generator__btn_postpone main-btn">
            <div className="sub_icon">
              <img src={`${imgPath}/icons/delay.svg`} alt=""/>
            </div>
            <p>Отложить</p>
          </div>
        </div>
      </div>
    )
}

const getRandom = (from = 0, to = 10) => {
  return Math.floor(Math.random() * (to-from) + from)
}

export default withContentDataService()(RandomGenerator);
