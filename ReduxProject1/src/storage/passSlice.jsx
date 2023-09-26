import { createSlice, nanoid } from "@reduxjs/toolkit";

export const passSlice = createSlice({
  name: "inputValue",
  initialState: {
    input: JSON.parse(localStorage.getItem("data")) || [],
  },
  reducers: {
    addData: (state, action) => {
      state.input.push({ id: nanoid(), value: action.payload });
      localStorage.setItem("data", JSON.stringify(state.input));
    },
    removeData: (state, action) => {
      state.input = state.input.filter((item) => item.id !== action.payload);
      localStorage.setItem("data", JSON.stringify(state.input));
    },
  },
});

export const { addData, removeData } = passSlice.actions;

export default passSlice.reducer;
