import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddToDo from './add-todo';
import http from '../_http';

describe('AddToDo', () => {
  test('click add button should trigger newToDoAdded event', async () => {

    http.post = jest.fn().mockReturnValue(undefined);
    const callback = jest.fn();
    const { getByText, getByLabelText } = render(
      <AddToDo newToDoAdded={()=> callback()} />
    );
    await waitFor(async () => {
      const input = getByLabelText('Description');
      userEvent.type(input, 'new task');

      const button = getByText('Add');
      userEvent.click(button);
   
    });

    expect(callback).toBeCalled();

  });
});
