import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { inputActions } from "../../../Store/InputsSlice";

const MinSalary = () => {
  const dispatch = useDispatch();
  const minSalary = useSelector((state) => state.input.minSalary);

  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <FormControl fullWidth>
        <InputLabel id="min-salary">Min Base Pay Salary</InputLabel>
        <Select
          labelId="min-salary"
          id="min-salary"
          value={minSalary}
          label="Min Base Pay Salary"
          onChange={(e) => dispatch(inputActions.setMinSalary(e.target.value))}
        >
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((salary) => (
            <MenuItem key={salary} value={salary.toString()}>
              {salary === 0 ? "0" : `${salary}L`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default MinSalary;
