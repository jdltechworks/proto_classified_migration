import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import auth from 'reducers/Auth';

export default history => combineReducers({
  router: connectRouter(history),
  form,
  auth,
});
