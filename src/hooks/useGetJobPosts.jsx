import { Snackbar } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const useGetJobPosts = (offset) => {
  const [jobPosts, setJobPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreJobPosts, setHasMoreJobPosts] = useState(false);

  useEffect(() => {
    setIsLoading(true);

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
          setJobPosts((prevJobPosts) => [...prevJobPosts, ...data.jdList]); // appending the new job posts to the old job posts
          setHasMoreJobPosts(data.jdList.length > 0); // checking if there were more job posts or not
          setIsLoading(false);
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
