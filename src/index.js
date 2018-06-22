import 'core-js/fn/object/assign';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/rootRouter';

import configureStore from './stores';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
