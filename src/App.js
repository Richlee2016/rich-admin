import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router/immutable';
import RouterCom from './routes';
import './App.less';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <RouterCom />
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

export default App;
