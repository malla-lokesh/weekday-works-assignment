import { createSlice } from "@reduxjs/toolkit";

const initialPostsState = {
  jobPosts: [],
  isLoading: false,
  hasMoreJobPosts: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    setJobPosts(state, action) {
      state.jobPosts = [...state.jobPosts, ...action.payload];
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setHasMoreJobPosts(state, action) {
      state.hasMoreJobPosts = action.payload;
    },
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
