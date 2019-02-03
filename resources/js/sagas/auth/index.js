
import Cookies from 'js-cookie';
import * as types from 'actions/Auth/types';
import { select, call, takeLatest, put } from 'redux-saga/effects';
import api from 'constants/api';

const auth = state => state.auth;

function* Login({ payload }) {
  try {
    const { data } = yield call(
      api.post,
      '/api/login',
      { ...payload },
    );
    Cookies.set('user_token', data.access_token, { expires: 7 });
    const response = yield call(api.get, '/api/user', {
      headers: { Authorization: `Bearer ${data.access_token}` },
    });
    yield put({
      type: types.AUTHENTICATED,
      authenticated: true,
      authToken: data.access_token,
      user: response.data,
    });
  } catch ({ response }) {
    console.log(response.data);
  }
}

export function* checkAuth() {
  const token = Cookies.get('user_token');

  yield token && put({
    type: types.AUTHENTICATED,
    authenticated: true,
    authToken: token,
  });
}

export function* Logout() {
  const authDetails = yield select(auth);
  const cookiesVisible = Cookies.get('user_token');

  yield !cookiesVisible && call(api.post, '/api/logout', {}, {
    headers: { Authorization: `Bearer ${authDetails.authToken}` },
  });

  yield put({ type: types.LOGGED_OUT });

  Cookies.remove('user_token');
}

export default function* authSaga() {
  yield checkAuth();
  yield takeLatest(types.AUTHENTICATING, Login);
  yield takeLatest(types.LOGGING_OUT, Logout);
}
