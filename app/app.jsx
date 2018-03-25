import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';
// Import the children
import Main from './components/Main.jsx';
import AlarmManager from './components/AlarmManager.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main} />
      <Route path="/alarmManager" component={AlarmManager} />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
