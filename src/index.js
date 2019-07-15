import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from 'src/containers/NotFoundPage/index';
import App from './containers/App/index';

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
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        {/*<Route path="/(:filter)" component={App} />*/}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
