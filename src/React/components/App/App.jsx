import React from 'react';
import { Route, Router } from 'react-router-dom';
import MainPage from '../pages/MainPage.jsx';
import GeneratorPage from '../pages/GeneratorPage.jsx';
import FavoritesPage from '../pages/FavoritesPage.jsx';
import AuthPage from '../pages/AuthPage.jsx';
const App = (props) => {
  return (
    <>
      <div className="container">
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/random" component={GeneratorPage}/>
        <Route exact path="/favorite" component={FavoritesPage}/>
        <Route exact path="/auth" component={AuthPage}/>
      </div>
    </>
  )
}

export default App;