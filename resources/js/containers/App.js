import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/Navbar';

const App = ({ children }) => (
  <>
  <Navbar />
  <div className="classified-app">{children}</div>
  </>
);

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
};

export default App;
