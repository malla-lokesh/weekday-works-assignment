import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { inputActions } from "../../../Store/InputsSlice";

const ExperienceInput = () => {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.input.experience);

  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <FormControl fullWidth>
        <InputLabel id="experience">Experience</InputLabel>
        <Select
          labelId="experience"
          id="experience"
          value={experience}
          label="experience"
          onChange={(e) => dispatch(inputActions.setExperience(e.target.value))}
        >
          {[...Array(10)].map((_, index) => (
            <MenuItem key={index + 1} value={(index + 1).toString()}>
              {(index + 1).toString()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default ExperienceInput;
