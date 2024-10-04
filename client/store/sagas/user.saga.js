import { takeEvery } from 'redux-saga/effects';
import { bindAsyncActions } from '../../utils/store/helpers';
import {
  createUser, createUserAsync
} from '../actions/user.actions.js';
import UserApi from '../../services/api/user';

function plugeWorker() {
  return true;
}

export function* userSaga() {
  yield takeEvery(createUser, bindAsyncActions(createUserAsync)(UserApi.createUser))
}