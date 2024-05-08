import React from "react";
import { FormControl, TextField, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { inputActions } from "../../../Store/InputsSlice";

const CompanyName = () => {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.input.companyName);

  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <FormControl fullWidth>
        <TextField
          variant="outlined"
          label={"companyName"}
          value={companyName}
          onChange={(e) =>
            dispatch(inputActions.setCompanyName(e.target.value))
          }
        />
      </FormControl>
    </Grid>
  );
};

export default CompanyName;
