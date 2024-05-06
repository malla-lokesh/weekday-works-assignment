import { Grid, Typography } from "@mui/material";
import Item from "../../UI/Item";
import React from "react";
import "./JobPost.css";
import ApplyButton from "../../UI/ApplyButton";

const JobPost = ({ post, loading, hasMoreJobs }) => {
  return (
    <Grid padding={2} className="post">
      <Grid container spacing={2} marginBottom={"1rem"} alignItems={"center"}>
        <Grid item xs={3}>
          <Item>
            <img src={post.logoUrl} alt="Company Logo" className="logo" />
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Typography style={{ fontSize: "0.85rem" }} className="companyName">
            {post?.companyName}
          </Typography>
          <Typography className="jobRole">{post?.jobRole}</Typography>
          <Typography style={{ fontSize: "0.75rem" }} className="location">
            {post?.location}
          </Typography>
        </Grid>
      </Grid>
      <Typography marginBottom={"0.2rem"}>About Company:</Typography>
      <Typography
        className="description"
        height={"10rem"}
        overflow={"hidden"}
        marginBottom={"1rem"}
        component={"div"}
      >
        {post?.jobDetailsFromCompany}
        <Typography className="showMore">Show more</Typography>
      </Typography>
      <Typography className="experience" marginBottom={"1rem"}>
        Min Experience - {post.minExp}
      </Typography>
      <ApplyButton />
    </Grid>
  );
};

export default JobPost;
