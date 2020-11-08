import React, {useState} from 'react';
import contentDataService from '../services/contentDataService.jsx';

const service = new contentDataService();
const withContentDataService = () => (Wrap) => {
  return (props) => {
    return (
      <Wrap {...props} service={service}/>
    )
  }

}

export default withContentDataService;