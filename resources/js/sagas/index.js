import { all } from 'redux-saga/effects';
import authSaga, { checkAuth } from './auth';

function* rootSaga() {
  yield all([
    checkAuth(),
    authSaga(),
  ]);
}

export default rootSaga;
