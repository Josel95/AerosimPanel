import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import estadoInicial from './redux/estadoInicial'
import panel from './redux/reducers'

import io from 'socket.io-client'

let store = createStore(panel, estadoInicial)

const socket = io('http://192.168.1.99:3000')

store.subscribe(() => {
  let state = store.getState()
  console.log(state)
  socket.emit('state', state)
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
