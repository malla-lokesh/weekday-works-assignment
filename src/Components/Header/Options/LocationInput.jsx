import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { inputActions } from "../../../Store/InputsSlice";

const LocationInput = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.input.location);

  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <FormControl fullWidth>
        <InputLabel id="location">Location</InputLabel>
        <Select
          labelId="location"
          id="location"
          value={location}
          label="Location"
          onChange={(e) => dispatch(inputActions.setLocation(e.target.value))}
        >
          {["mumbai", "delhi ncr", "remote", "chennai", "bangalore"].map(
            (loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default LocationInput;
