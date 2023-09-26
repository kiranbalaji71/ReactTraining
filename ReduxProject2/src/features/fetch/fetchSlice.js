import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  item: [],
  isLoading: false,
};

export const getApiData = createAsyncThunk("itempost/getApiData", async () => {
  const res = await fetch(url);
  return res.json();
});

const fetchSlice = createSlice({
  name: "itempost",
  initialState,
  reducers: {},
  extraReducers: {
    [getApiData.pending]: (state) => {
      state.isLoading = true;
    },
    [getApiData.fulfilled]: (state, action) => {
      console.log("success");
      state.isLoading = false;
      state.item = action.payload;
    },
    [getApiData.rejected]: (state) => {
      console.log("error");
      state.isLoading = false;
    },
  },
});

export default fetchSlice.reducer;
