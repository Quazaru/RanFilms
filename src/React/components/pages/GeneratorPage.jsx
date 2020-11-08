import React from 'react';

import RandomGenerator from '../RandomGenerator/RandomGenerator.jsx';
import withContentDataService from '../../HOC/withContentDataService.jsx';
const GeneratorPage = ({}) => {


  return (
    <RandomGenerator/>
  )
}

export default withContentDataService()(GeneratorPage);
