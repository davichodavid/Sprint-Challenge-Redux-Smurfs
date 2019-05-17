import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import /* You need some sort of reducer */ { rootReducer } from './reducers';

import './index.css';
import App from './components/App';


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
