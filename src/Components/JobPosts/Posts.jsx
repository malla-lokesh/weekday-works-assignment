import React from "react";
import useGetJobPosts from "../../hooks/useGetJobPosts";
import JobPost from "./JobPost";
import { Grid } from "@mui/material";

const Posts = () => {
  const { jobPosts, isLoading, hasMoreJobPosts } = useGetJobPosts();

  const filteredPosts = jobPosts.filter((post) => {});

  return (
    <Grid container spacing={2}>
      {jobPosts.map((jobPost) => (
        <Grid item xs={12} sm={6} lg={4} key={jobPost.jdUid}>
          <JobPost
            post={jobPost}
            loading={isLoading}
            hasMoreJobs={hasMoreJobPosts}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
