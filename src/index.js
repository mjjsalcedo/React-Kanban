import './containers/App/App.css';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App.js';

import { Provider } from 'react-redux';

import cardReducers from './containers/App/reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const store = createStore(
  cardReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>

        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  </Provider>,
  rootEl
);