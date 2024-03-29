import { handleActions } from 'redux-actions';

import { 
  getUserInfoActionAsync, 
  changeUserLanguageFieldAsync, 
  clearUserErrorAsync,
  createUserAsync
} from '../actions/user.actions';

const initialState = {
  state: null,
  language: 'ru',
  error: null,
};

export default handleActions(
  {
    [createUserAsync.success]: (s, a) => ({ ...s, state: a.payload.data && a.payload.data.success ? [...s.state, a.payload.data.user] : [] }),
    [createUserAsync.failed]: (s, a) => ({ ...s, error: null }),

    [getUserInfoActionAsync.success]: (s, { payload: { response, data: requestData } } = {}) => ({
      ...s,
      state: requestData.success ? requestData.result.user : null,
      error:
        response && response.statusText == 'Unauthorized'
          ? null
          : requestData.success
          ? null
          : requestData.error
          ? requestData.error
          : 'error',
    }),
    [changeUserLanguageFieldAsync.success]: (s, { payload: { language } } = {}) => ({ ...s, language: language }),
    [clearUserErrorAsync.success]: (s, a) => ({ ...s, error: null }),

    [getUserInfoActionAsync.failed]: (s, { payload: { response } } = {}) => ({
      ...s,
      state: response && response.status == '401' ? null : s.state,
      error: response && response.status == '401' ? null : 'error',
    }),
    [clearUserErrorAsync.failed]: (s, a) => ({ ...s, error: null }),
  },
  initialState
);