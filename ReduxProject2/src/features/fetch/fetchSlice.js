import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

export const getApiData = createAsyncThunk("itempost/getApiData", async () => {
  const res = await axios.get(url);
  return res.data;
});

const itemAdapter = createEntityAdapter({
  selectId: (item) => item.id,
});

const initialState = itemAdapter.getInitialState({
  isLoading: "idle",
  error: null,
});

const fetchSlice = createSlice({
  name: "itempost",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApiData.pending, (state) => {
      state.isLoading = "loading";
    });
    builder.addCase(getApiData.fulfilled, (state, action) => {
      state.isLoading = "success";
      itemAdapter.setAll(state, action.payload);
    });
    builder.addCase(getApiData.rejected, (state, action) => {
      state.isLoading = "failed";
      state.error = action.error.message;
    });
  },
});

export const itemSelectors = itemAdapter.getSelectors((state) => state.fetch);

export default fetchSlice.reducer;
