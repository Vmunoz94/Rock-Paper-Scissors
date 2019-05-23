import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import finalReducer from './redux/finalReducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { updateId, updateOtherPlayer, updateChoice } from './redux/finalActions';

const rootReducer = combineReducers({
  finalReducer,
});

const store = createStore(rootReducer); // put your reducer here!!!
// store.dispatch(); // dispatch actions directly

// pass this object where ever you need it
const webSocket = new WebSocket('ws://localhost:4000');
let id = null;

webSocket.onopen = () => {
  console.log('connection established');
};

webSocket.onclose = () => {
  console.log("Reset")
  store.dispatch(updateChoice(""))
  webSocket.send(JSON.stringify({
    id,
    choice: ""
  }))
  console.log('connection closed');
};

webSocket.onerror = (e) => {
  console.log('connection error', e);
};

webSocket.onmessage = (message) => {
  let data = message.data
  if (message.data === "Reset"){
    console.log("Reset")
    store.dispatch(updateChoice(""))
    webSocket.send(JSON.stringify({
      id,
      choice: ""
    }))

  } else {
    data = JSON.parse(data)
    console.log(data)
  }

  if  (data === 1 || data === 2){
    id = data;
    store.dispatch(updateId(id))
  } 
  else if (data.id !== id){
    store.dispatch(updateOtherPlayer(data))
  }
  // else{
  //   JSON.parse(message.data)
  //   console.log(id)
  // }
  // else if (message.data.id !== id){
  //   store.dispatch(updateOtherPlayer(message.data))
  //   console.log(message.data);
  // }
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
