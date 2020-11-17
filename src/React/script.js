import '../assets/css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {MemoryRouter as Router, Switch} from 'react-router-dom'
import App from './components/App/App';
import Header from './components/Header/Header.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx'

import store from './redux/script';

ReactDOM.render(
  <Router>
    <Provider store={store}>
    <Header />
    <Switch>
      <App></App>
    </Switch>
    </Provider>
  </Router>,
  document.querySelector('#app'),
);
