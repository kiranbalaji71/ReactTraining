import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    post: JSON.parse(localStorage.getItem("post")) || [],
  },
  reducers: {
    addPost: (state, action) => {
      state.post.push({
        id: nanoid(),
        input: action.payload,
        like: 0,
      });
      localStorage.setItem("post", JSON.stringify(state.post));
    },
    deletePost: (state, action) => {
      state.post = state.post.filter((item) => item.id !== action.payload);
      localStorage.setItem("post", JSON.stringify(state.post));
    },
    likePost: (state, action) => {
      let value = state.post.find((item) => item.id === action.payload);
      value.like += 1;
      localStorage.setItem("post", JSON.stringify(state.post));
    },
    editPost: (state, action) => {
      let value = state.post.find((item) => item.id === action.payload.id);
      value.input[1] = action.payload.input;
      localStorage.setItem("post", JSON.stringify(state.post));
    },
  },
});

export const { addPost, deletePost, likePost, editPost } = postSlice.actions;

export default postSlice.reducer;
