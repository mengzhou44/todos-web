import reducer, { setList, setCurrent } from './todos-reducer';

test('should return the initial state', () => {
  const state = reducer(undefined, {});
  expect(state).toEqual({
    list: [],
    current: null,
  });
});

test('should handle a todo being added to an empty list', () => {
  const previousState = {
    list: [],
    current: null,
  };

  const state = reducer(
    previousState,
    setList([{ id: 1, description: 'test' }])
  );

  expect(state).toEqual({
    list: [{ id: 1, description: 'test' }],
    current: null,
  });
});

test('should handle a todo being set as current', () => {
  const previousState = {
    list: [],
    current: null,
  };

  const state = reducer(
    previousState,
    setCurrent({ id: 1, description: 'test' })
  );

  expect(state).toEqual({
    list: [],
    current: { id: 1, description: 'test' },
  });
});
