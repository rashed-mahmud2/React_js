import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postApi";

const initialState = {
  isLoading: false,
  isError: false,
  posts: [],
  errror: null,
};

// async thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await getPosts();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errror = action.error?.message || "An unknown error orrured";
    });
  },
});


export default postsSlice.reducer;