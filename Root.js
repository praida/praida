import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import './styles/normalize.scss';
import './styles/default.scss';
import './styles/layout.scss';

import Routes from './Routes';

const Root = props => (
  <IntlProvider locale="en">
    <Provider store={props.store}>
      <Routes />
    </Provider>
  </IntlProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
