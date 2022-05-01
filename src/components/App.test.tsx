import { render, waitFor } from '@testing-library/react';
import App from './App';
import http from './_http';
import { Provider } from 'react-redux';

import toDoReducer from '../reducers/todos-reducer';
import { configureStore } from '@reduxjs/toolkit';

describe('App', () => {
  test('can render content and title  ', async () => {
    http.get = jest
      .fn()
      .mockReturnValue({ data: [{ id: 1, description: 'go shopping' }] });
    http.delete = jest.fn().mockReturnValue(undefined);

    const store = configureStore({
      reducer: {
        todos: toDoReducer,
      },
    });

    const { getByText } =  render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => getByText('Pern To Do List'));

    const found = getByText('Pern To Do List');
    expect(found).toBeDefined();

    const content = getByText('go shopping');
    expect(content).toBeDefined();
  });
});
