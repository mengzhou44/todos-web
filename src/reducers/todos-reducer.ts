import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  current: null,
};

const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setList, setCurrent } = toDoSlice.actions;
export default toDoSlice.reducer;
