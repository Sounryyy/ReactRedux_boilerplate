import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = ['koto', 'na'];

function playList(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [...state, action.payload];
  }

  return state;
}

const store = createStore(playList);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
