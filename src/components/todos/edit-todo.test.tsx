import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditToDo from './edit-todo';
import http from '../_http';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('EditToDo', () => {
  test('should hide if item is null', async () => {
    const callback = jest.fn();
    const { queryByText } = render(
      <EditToDo item={null} onSaved={() => callback()} />
    );
    const found = await queryByText('Description');
    expect(found).toBe(null);
  });

  test('should trigger onsaved event', async () => {
    http.put = jest.fn().mockReturnValue(undefined);
    const callback = jest.fn();
    const item = { id: 1, description: 'have a coffee' };
    const { getByLabelText, getByText } = render(
      <EditToDo item={item} onSaved={() => callback()} />
    );
    await waitFor(async () => {
      const input = getByLabelText('Description');
      userEvent.type(input, 'new task');

      const button = getByText('Save');
      userEvent.click(button);
    });

    expect(callback).toBeCalled();
  });
});
