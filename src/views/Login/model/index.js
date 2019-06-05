import { fromJS } from 'immutable';
import { push } from 'connected-react-router/immutable';
const _timer = time =>
  new Promise((resolve, reject) => setTimeout(resolve, time));

const Types = {
  LOG_IN: 'Log/IN',
  LOG_OUT: 'Log/OUT',
  ADD_ROUTES: 'Log/ADD_ROUTES',
  ADD_NUM: 'ADD_NUM',
};

export const Actions = {
  login: payload => ({ type: Types.LOG_IN, payload }),
  logout: () => ({ type: Types.LOG_OUT }),
  addRoutes: payload => ({ type: Types.ADD_ROUTES, payload }),
  add: payload => ({ type: Types.ADD_NUM, payload }),
};

export const Thunks = {
  FetchToken: () => async dispatch => {
    await _timer(300);
    const token = '123456';
    await _timer(300);
    const user = { name: 'rich', role: ['admin'] };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    dispatch(Actions.login({ Token: token, User: user }));
  },
  AsyncAdd: () => async (dispatch, getStore) => {
    const state = getStore()
      .getIn(['router', 'location'])
      .toJS();
    console.log(state);
    await _timer(300);
    dispatch(Actions.add());
  },
  GoIndex: () => async dispatch => {
    dispatch(push('/'));
  },
  LogOut: () => async dispatch => {
    localStorage.setItem('user', null);
    localStorage.setItem('token', null);
    dispatch(Actions.logout());
    dispatch(push('/login'));
  },
};

const INITIAL_STATE = {
  num: 0,
  Token: JSON.parse(localStorage.getItem('token')),
  User: localStorage.getItem('user'),
  Routes: [],
};

export default (state = fromJS(INITIAL_STATE), action) => {
  switch (action.type) {
    case Types.LOG_IN:
      return state.merge({ ...action.payload });
    case Types.LOG_OUT:
      return state.merge({ Token: null, User: null });
    case Types.ADD_ROUTES:
      return state.update('Routes', () => action.payload);
    case Types.ADD_NUM:
      return state.update('num', val => val + 1);
    default:
      return state;
  }
};
