import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postapi";

const initialState = {
  isLoading: true,
  isError: false,
  posts: [],
  error: null,
};

// async thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", () => {
  const posts = getPosts();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error =  action.error.message || "an unknow errro occured"
    });
  },
});

export default postsSlice.reducer;


