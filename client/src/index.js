import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import allReducers from './reducers/allReducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import allReducers from './reducers/allReducers';

// let store = createStore(allReducers);

ReactDOM.render(
  <Provider>
    <App /> 
  </Provider>,
  document.getElementById('app')
);

