import { Grid, Typography, Button } from "@mui/material";
import Item from "../../UI/Item";
import React from "react";
import "./JobPost.css";
import ApplyButton from "../../UI/ApplyButton";

const JobPost = ({ post, loading, hasMoreJobs }) => {
  return (
    <Item>
      <Grid container spacing={2} marginBottom={"1rem"} alignItems={"center"}>
        <Grid item xs={3}>
          <Item>
            <img src={post.logoUrl} alt="Company Logo" className="logo" />
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Typography className="companyName">{post?.companyName}</Typography>
          <Typography className="jobRole">{post?.jobRole}</Typography>
          <Typography className="location">{post?.location}</Typography>
        </Grid>
      </Grid>
      <Typography marginBottom={"0.5rem"}>About Company</Typography>
      <Typography marginBottom={"1rem"}>
        {post?.jobDetailsFromCompany}
      </Typography>
      <Typography marginBottom={"1rem"}>
        Min Experience - {post.minExp}
      </Typography>
      <ApplyButton />
    </Item>
  );
};

export default JobPost;
