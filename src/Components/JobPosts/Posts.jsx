import React from "react";
import useGetJobPosts from "../../hooks/useGetJobPosts";
import JobPost from "./JobPost";

const Posts = () => {
  const { jobPosts, isLoading, hasMoreJobPosts } = useGetJobPosts();

  return (
    <React.Fragment>
      {jobPosts.map((jobPost) => {
        return (
          <JobPost
            key={jobPost.jdUid}
            post={jobPost}
            loading={isLoading}
            hasMoreJobs={hasMoreJobPosts}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Posts;
