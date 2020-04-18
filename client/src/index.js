import React  from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore,combineReducers,applyMiddleware } from 'redux';
import { logger } from 'redux-logger'
import reduxPromise from 'redux-promise';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";
import { routerReducer, routerMiddleware } from 'react-router-redux';



//import style
import './assets/stylesheets/application.scss';

//import component
import Home from './components/home';
import HomePage from './components/home-page';
import FormInscription from './containers/form-inscription';
import FormConnect from './containers/form-connect';
import Category from './components/category';
import CategoryShow from './components/category-show'
import Associations from './components/associations';
import Association from './components/association';
import Near from './components/near';

//import reducer
import { reducer as formReducer } from 'redux-form';
import userReducer from './reducers/user';
import cardReducer from './reducers/card';
import categoryReducer from './reducers/category';
import associationReducer from './reducers/association';
import activeAssocReducer from './reducers/active-assoc';
import activeCardReducer from './reducers/active-card';
import positionReducer from './reducers/position'

const reducers = combineReducers({
  form: formReducer,
  user: userReducer,
  cards: cardReducer,
  activeCard: activeCardReducer,
  category: categoryReducer,
  association: associationReducer,
  routing: routerReducer,
  activeAssoc: activeAssocReducer,
  position: positionReducer
});

const history = createBrowserHistory();
const middleware = applyMiddleware(reduxPromise, logger,routerMiddleware(history));

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middleware)} >
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/connexion" exact component={FormConnect} />
        <Route path="/inscription" exact component={FormInscription} />
        <Route path="/category/index" exact component={Category} />
        <Route path="/category/:id" exact component={CategoryShow} />
        <Route path="/associations/index" exact component={Associations}/>
        <Route path="/associations/:id" exact component={Association}/>
        <Route path="/near/lat=:lat&lng=:lng" exact component={Near}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
