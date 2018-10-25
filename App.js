import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './src/reducers';

import Navigator from './src/screens';

const store = createStore(reducers, composeWithDevTools());

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
