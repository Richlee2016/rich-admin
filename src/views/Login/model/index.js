import { fromJS } from 'immutable';
import { push } from 'connected-react-router/immutable';
const _timer = time =>
  new Promise((resolve, reject) => setTimeout(resolve, time));

const Types = {
  LOG_IN: 'Log/IN',
  LOG_OUT: 'Log/OUT',
  ADD_ROUTES: 'Log/ADD_ROUTES',
};

export const Actions = {
  login: payload => ({ type: Types.LOG_IN, payload }),
  logout: () => ({ type: Types.LOG_OUT }),
  addRoutes: payload => ({ type: Types.ADD_ROUTES, payload }),
};

export const Thunks = {
  FetchToken: () => async dispatch => {
    await _timer(300);
    const token = '123456';
    await _timer(300);
    const user = { name: 'rich', role: ['admin'] };
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
};

const INITIAL_STATE = {
  num: 0,
  Token: null,
  User: null,
  Routes: [],
};

export default (state = fromJS(INITIAL_STATE), action) => {
  switch (action.type) {
    case Types.LOG_IN:
      return state.merge({ ...action.payload });
    case Types.LOG_OUT:
      return state.merge({ token: null, user: null });
    case Types.ADD_ROUTES:
      return state.update('Routes', () => action.payload);
    default:
      return state;
  }
};
