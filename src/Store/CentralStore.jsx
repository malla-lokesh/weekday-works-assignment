import { configureStore } from "@reduxjs/toolkit";
import InputReducer from "./InputsSlice";

const CentralStore = configureStore({
  reducer: {
    input: InputReducer,
  },
});

export default CentralStore;
