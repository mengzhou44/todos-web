import { getErrorMessage } from './get-error-message';

test('pass an error should throw error ', () => {
  let error = new Error('Error occured!');

  try {
    getErrorMessage(error);
  } catch (err) {
    expect(err.message).toBe(error.message);
  }
});

test('pass a string  should return string', () => {
  let error = 'Error occured!';
  const res = getErrorMessage(error);
  expect(res).toBe(error);
});
