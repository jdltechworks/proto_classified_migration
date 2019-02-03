import { handleActions } from 'redux-actions';
import * as types from 'actions/Auth/types';

export const initialState = {
  authenticated: false,
  authToken: null,
};

const authReducer = handleActions(
  {
    [types.AUTHENTICATED](state, { authenticated, authToken, user }) {
      return {
        ...state,
        authenticated,
        authToken,
        user,
      };
    },
    [types.LOGGED_OUT](state) {
      return {
        ...state,
        authenticated: false,
        authToken: null,
      };
    },
  },
  initialState,
);

export default authReducer;
