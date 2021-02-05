import React from 'react';
import ReactDOM from 'react-dom';
// import { compose } from 'redux';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import thunk from 'redux-thunk';
import './index.css';
import logger from './middleWare/logger';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import watchRequest from './store/sagas';
import { commonReducer } from './store/reducer';
import { authReducer } from './store/authReducer';

const sagaMiddleWare = createSagaMiddleWare();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: combineReducers({ commonReducer, authReducer }),
  middleware: [logger, thunk, sagaMiddleWare],

});
sagaMiddleWare.run(watchRequest);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
