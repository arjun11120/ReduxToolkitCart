import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("post/getPosts", async () => {
  return await fetch("https://fakestoreapi.com/products").then((response) =>
    response.json()
  );
});
const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
    },
  }
});  
export default postSlice.reducer;
