import React, { useState } from "react";
import { getPostedJobsInLocal, setPostedJobsInLocal } from "../utils/helper";

export const PostedJobsContext = React.createContext({
  postedJobs: [],
  setPostedJobs: () => {},
});

const PostedJobsContextProvider = ({ children }) => {
  const [postedJobs, setPostedJobs] = useState(getPostedJobsInLocal());

  const addPost = (post) => {
    let newPostedJobs = [post, ...postedJobs];
    setPostedJobsInLocal(newPostedJobs);
    setPostedJobs(newPostedJobs);
  };

  return (
    <PostedJobsContext.Provider value={{ postedJobs, addPost }}>
      {children}
    </PostedJobsContext.Provider>
  );
};

export default PostedJobsContextProvider;
