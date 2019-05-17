import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Provider
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { getRealTimeData } from './service/getrealtimedata';
import { setInterval } from 'timers';
import { store, getData } from "./service/init-store";
// import { myReducer } from './redux/reducers/reducer';

/**
 * @param setTimeout get blocks and transactions
 */
setInterval(() => {
  getRealTimeData();
}, 10000);

getData();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
