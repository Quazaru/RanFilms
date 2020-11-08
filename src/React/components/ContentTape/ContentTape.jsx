import  React, {useEffect,useState} from 'react';

import withContentDataService from '../../HOC/withContentDataService.jsx';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';
import ContentCard from '../ContentCard/ContentCard.jsx';
import ContentCardMin from '../ContentCardMin/ContentCardMin.jsx';

import './ContentTape.scss';

const ContentTapeContainer = ({data, mode = "full"}) => {
  
  console.log(mode);
  return (
    <ContentTape content={data} mode={mode}/>
  )
}

const ContentTape = (props) => {
  const {content, mode} = props;
  if(content) {
    let contentCards = null;
    if(mode == "full") {
      
      contentCards = content.map((item) => {
        return (
          <ContentCard data={item} key={item.id} />
        )

      });
      console.log(contentCards);
    } else {
      contentCards = content.map((item) => {
        return (
          <ContentCardMin data={item} key={item.id} />
        )
      });
    }
    
    
    return (
      <div className='content-tape'>
        {contentCards}
      </div>
    )
  } else {
    return (
      <LoadingSpinner />
    )
  }
}

export default withContentDataService()(ContentTapeContainer);
