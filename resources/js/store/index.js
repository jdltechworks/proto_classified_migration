import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore, compose } from 'redux';

import rootSaga from 'sagas';
import reducers from 'reducers';
import isDevelop from 'utils/isDevelop';
import chromeExtComposer from 'utils/chromeExtComposer';


export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  routerMiddleware(history),
  sagaMiddleware,
];

const composer = isDevelop ? chromeExtComposer : compose;

const composeStore = composer(
  applyMiddleware(...middlewares),
)(createStore);

const store = composeStore(reducers(history));

sagaMiddleware.run(rootSaga);

export default store;
