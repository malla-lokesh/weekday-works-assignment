import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { inputActions } from "../../../Store/InputsSlice";

const RolesInput = () => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.input.roles);

  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <FormControl fullWidth>
        <InputLabel id="roles">Roles</InputLabel>
        <Select
          labelId="roles"
          id="roles"
          value={roles}
          label="Roles"
          onChange={(e) => dispatch(inputActions.setRoles(e.target.value))}
        >
          {["frontend", "ios", "tech lead", "android", "backend"].map(
            (role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default RolesInput;
