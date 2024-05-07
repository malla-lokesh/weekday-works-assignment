import React, { useCallback, useRef } from "react";
import useGetJobPosts from "../../hooks/useGetJobPosts";
import JobPost from "./JobPost";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../../Store/PostsStore";

const Posts = () => {
  const { jobPosts, isLoading, hasMoreJobPosts } = useGetJobPosts();

  const experience = useSelector((state) => state.input.experience);
  const companyName = useSelector((state) => state.input.companyName);
  const location = useSelector((state) => state.input.location);
  const roles = useSelector((state) => state.input.roles);
  const minSalary = useSelector((state) => state.input.minSalary);

  const dispatch = useDispatch();

  const observer = useRef();

  const lastJobPostElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreJobPosts) {
          dispatch(postsActions.setOffset());
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMoreJobPosts]
  );

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
      {filteredPosts.map((jobPost, index) => {
        const isLast = filteredPosts.length - 1 === index;
        return (
          <Grid item xs={12} sm={6} lg={4} key={jobPost.jdUid}>
            <JobPost
              ref={isLast ? lastJobPostElementRef : null}
              post={jobPost}
              loading={isLoading}
              hasMoreJobs={hasMoreJobPosts}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
