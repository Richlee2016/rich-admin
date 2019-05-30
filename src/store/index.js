import Immutable from 'immutable';
import Login from '../views/Login/model';
import { createHashHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux-immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import {
  routerMiddleware,
  connectRouter,
} from 'connected-react-router/immutable';

export const history = createHashHistory();

const initialState = Immutable.Map();

const middlewares = [
  thunkMiddleware,
  createLogger({
    collapsed: true,
    stateTransformer: state => state.toJS(),
  }),
];

const RootReducer = combineReducers({
  login: Login,
  router: connectRouter(history),
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () =>
  createStore(
    RootReducer,
    initialState,
    composeEnhancer(applyMiddleware(routerMiddleware(history), ...middlewares))
  );
