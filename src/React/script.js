import '../assets/css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'redux';
import {MemoryRouter as Router, Switch} from 'react-router-dom'
import App from './components/App/App';
import Header from './components/Header/Header.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <App></App>
    </Switch>
  </Router>,
  document.querySelector('#app'),
);
