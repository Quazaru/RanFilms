import React from 'react';
import { Route, Router } from 'react-router-dom';
import MainPage from '../pages/MainPage.jsx';
import GeneratorPage from '../pages/GeneratorPage.jsx';
import FavoritesPage from '../pages/FavoritesPage.jsx';
import AuthPage from '../pages/AuthPage.jsx';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
const App = (props) => {
  return (
    <ErrorBoundary >
      <div className="container">
        <Route exact path="/р" component={MainPage}/>
        <Route exact path="/random" component={GeneratorPage}/>
        <Route exact path="/favorite" component={FavoritesPage}/>
        <Route exact path="/" component={AuthPage}/>
      </div>
    </ErrorBoundary>
  )
}

export default App;