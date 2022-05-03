import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import { Provider } from 'react-redux';

import authReducer from './reducers/auth-reducer';
import toDoReducer from './reducers/todos-reducer';

export const store = configureStore({
  reducer: {
    todos: toDoReducer,
    auth: authReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
