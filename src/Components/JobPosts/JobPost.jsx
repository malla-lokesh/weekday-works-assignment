import { Grid } from "@mui/material";
import Item from "../../UI/Item";
import React from "react";

const JobPost = () => {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} lg={4}>
        <Item>xs = 8</Item>
      </Grid>
    </React.Fragment>
  );
};

export default JobPost;
