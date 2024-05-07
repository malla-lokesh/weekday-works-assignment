import { createSlice } from "@reduxjs/toolkit";

const initialPostsState = {
  jobPosts: [],
  isLoading: false,
  hasMoreJobPosts: false,
  offset: 0,
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
    setOffset(state) {
      state.offset = state.offset + 10;
    },
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
