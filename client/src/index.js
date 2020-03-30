import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore,combineReducers,applyMiddleware } from 'redux';
import { logger } from 'redux-logger'
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';



//import style
import './assets/stylesheets/application.scss';

//import component
import Home from './components/home'
import HomePage from './components/home-page'

const reducers = combineReducers({

});


const middleware = applyMiddleware(reduxPromise, logger);


ReactDOM.render(
  <Provider store={createStore(reducers, {}, middleware)} >
    <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={HomePage} />
    </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
