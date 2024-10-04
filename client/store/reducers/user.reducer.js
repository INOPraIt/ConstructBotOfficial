import { handleActions } from 'redux-actions';

import { 
  createUserAsync,
} from '../actions/user.actions.js';

const initialState = {
  state: [],
  error: null,
};

export default handleActions(
  {
    [createUserAsync.success]:
    (s, a) =>
      ({ ...s, state: a.payload.data && a.payload.data.success ? 
        [...s.state, a.payload.data.user] : [], error: a.payload.data && a.payload.data.success ? 
        null : a.payload.data && a.payload.data.error ? 
        a.payload.data.error : 'Что-то пошло не так' 
      }),
    [createUserAsync.failed]: (s, a) => ({ ...s, state: [], error: 'Что-то пошло не так'}),
  },
  initialState
);