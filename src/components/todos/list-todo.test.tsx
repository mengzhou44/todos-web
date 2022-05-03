import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ListToDo from './list-todo';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('ListToDo', () => {
  test('should display todo list, click delete button, should trigger callback', async () => {
    const list = [
      {
        id: 1,
        description: 'go shoppping',
      },
    ];
    const callback = jest.fn();
    const { getByText, getByRole } = render(
      <ListToDo list={list} onDelete={() => callback()} />
    );
    await waitFor(async () => {
      const found = getByText('go shoppping');
      expect(found).toBeDefined();

      const button = getByRole('button', {
        name: /delete/i,
      });
      userEvent.click(button);
    });
    expect(callback).toBeCalled();
  });
});
