import React from 'react';
import { Provider } from 'react-redux';
import store, { history } from 'store';
import { ConnectedRouter as Router } from 'connected-react-router';
import Routes from 'routes';
import App from 'containers/App';

const Client = () => (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Routes />
      </App>
    </Router>
  </Provider>
);

export default Client;
