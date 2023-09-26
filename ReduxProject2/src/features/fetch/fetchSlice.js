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
  extraReducers: (builder) => {
    builder.addCase(getApiData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getApiData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.item = action.payload;
    });
    builder.addCase(getApiData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default fetchSlice.reducer;
