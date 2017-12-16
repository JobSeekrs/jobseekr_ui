import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import App from './components/App';
import allReducers from './reducers/allReducers';
// import dotenv from 'dotenv';

// dotenv.config();
const persistedState = loadState();
const store = createStore(allReducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('app'));

