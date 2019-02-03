import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ component: ComposedComponent, authenticated, ...rest }) => (
  <Route {...rest}
    render={() => !authenticated ? <Redirect push strict={true} to='/login' /> : <ComposedComponent /> } />
);

ProtectedRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

ProtectedRoute.defaultProps = {
  authenticated: false,
};

const mapStateToProps = ({ auth }) => ({ authenticated: auth.authenticated });

export default connect(mapStateToProps)(ProtectedRoute);
