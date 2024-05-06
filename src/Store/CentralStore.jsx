import { configureStore } from "@reduxjs/toolkit";
import InputReducer from "./InputsSlice";
import PostsReducer from "./PostsStore";

const CentralStore = configureStore({
  reducer: {
    input: InputReducer,
    posts: PostsReducer,
  },
});

export default CentralStore;
