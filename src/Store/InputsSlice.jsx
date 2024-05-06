import { createSlice } from "@reduxjs/toolkit";

const initialInputsState = {
  experience: "",
  companyName: "",
  location: "",
  jobType: "",
  roles: "",
  minSalary: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState: initialInputsState,
  reducers: {
    setExperience(state, action) {
      state.experience = action.payload;
    },
    setCompanyName(state, action) {
      state.companyName = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setJobType(state, action) {
      state.jobType = action.payload;
    },
    setRoles(state, action) {
      state.roles = action.payload;
    },
    setMinSalary(state, action) {
      state.minSalary = action.payload;
    },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice.reducer;
