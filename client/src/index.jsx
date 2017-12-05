import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import allReducers from './reducers/allReducers';

// import allReducers from './reducers/allReducers';
// let store = createStore(allReducers);

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('app'));

