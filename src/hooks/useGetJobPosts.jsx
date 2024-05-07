import { Snackbar } from "@mui/material";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../Store/PostsStore";

const useGetJobPosts = (offset) => {
  const dispatch = useDispatch();
  const jobPosts = useSelector((state) => state.posts.jobPosts);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const hasMoreJobPosts = useSelector((state) => state.posts.hasMoreJobPosts);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      // Initially the API call is being called two times,
      // hence using useRef to return if second time called
      isInitialRender.current = false;
      return;
    }

    dispatch(postsActions.setIsLoading(true));

    const fetchData = async () => {
      const body = JSON.stringify({
        limit: 10,
        offset,
      });

      const requestOptions = {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );
        if (response.ok) {
          const data = await response.json();
          dispatch(postsActions.setJobPosts(data.jdList)); // appending the new job posts to the old job posts

          dispatch(postsActions.setHasMoreJobPosts(data.jdList.length > 0)); // checking if there were more job posts or not
          dispatch(postsActions.setIsLoading(false));
        }
      } catch (error) {
        <Snackbar message={error.message} />;
      }
    };

    fetchData();
  }, [offset]); // whenever the offset value changes

  return { jobPosts, isLoading, hasMoreJobPosts };
};

export default useGetJobPosts;
