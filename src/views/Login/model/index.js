import { fromJS } from 'immutable'
import { push } from 'connected-react-router/immutable'
const _timer = time => new Promise((resolve, reject) => setTimeout(resolve, time))

const Types = {
  LOG_IN: 'Log/IN',
  LOG_OUT: 'Log/Out',
  ADD: 'ADD'
}

export const Actions = {
  login: (payload) => ({ type: Types.LOG_IN, payload }),
  logout: () => ({ type: Types.LOG_OUT }),
  add: payload => ({ type: Types.ADD, payload })
}

export const Thunks = {
  FetchToken: () => async (dispatch) => {
    await _timer(300)
    const token = '123456'
    await _timer(300)
    const user = { name: 'rich' }
    dispatch(Actions.login({ token, user }))
  },
  AsyncAdd: () => async (dispatch, getStore) => {
    const state = getStore().getIn(['router', 'location']).toJS()
    console.log(state)
    await _timer(300)
    dispatch(Actions.add())
  },
  GoIndex: () => async (dispatch) => {
    dispatch(push('/'))
  }
}

const INITIAL_STATE = {
  num: 0,
  Token: null,
  User: null
}

export default (state = fromJS(INITIAL_STATE), action) => {
  switch (action.type) {
    case Types.LOG_IN:
      return state.merge({ ...action.payload })
    case Types.LOG_OUT:
      return state.merge({ token: null, user: null })
    case Types.ADD:
      return state.update('num', num => ++num)
    default:
      return state
  }
}
