import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import finalReducer from './redux/finalReducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  finalReducer,
});

const store = createStore(rootReducer); // put your reducer here!!!
// store.dispatch(); // dispatch actions directly

// pass this object where ever you need it
const webSocket = new WebSocket('ws://localhost:4000');

webSocket.onopen = () => {
  console.log('connection established');
};

webSocket.onclose = () => {
  console.log('connection closed');
};

webSocket.onerror = (e) => {
  console.log('connection error', e);
};

webSocket.onmessage = (message) => {
  console.log('message received', message.data);
};

ReactDOM.render(
  <Provider store={store}>
    <App webSocket={webSocket} />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
