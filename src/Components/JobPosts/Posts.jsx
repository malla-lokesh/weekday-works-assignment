import React from "react";
import useGetJobPosts from "../../hooks/useGetJobPosts";
import JobPost from "./JobPost";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

const Posts = () => {
  const { jobPosts, isLoading, hasMoreJobPosts } = useGetJobPosts();

  const experience = useSelector((state) => state.input.experience);
  const companyName = useSelector((state) => state.input.companyName);
  const location = useSelector((state) => state.input.location);

  const roles = useSelector((state) => state.input.roles);
  const minSalary = useSelector((state) => state.input.minSalary);

  const filteredPosts = jobPosts.filter((post) => {
    const locationLowerCase = location.toLowerCase();
    const companyNameLowerCase = companyName.toLowerCase();
    const rolesLowerCase = roles.toLowerCase();

    return (
      (location === "" ||
        post.location.toLowerCase().includes(locationLowerCase)) &&
      (roles === "" || post.jobRole.toLowerCase().includes(rolesLowerCase)) &&
      (companyName === "" ||
        post.companyName.toLowerCase().includes(companyNameLowerCase)) &&
      (experience === "" || post.minExp === experience) &&
      (minSalary === "" || post.minJdSalary > minSalary)
    );
  });

  return (
    <Grid container spacing={2}>
      {filteredPosts.map((jobPost) => (
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
