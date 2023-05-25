import React from "react";
import { PostedJobsContext } from "../contexts/PostedJobsContext";

const usePostedJobsContext = () => React.useContext(PostedJobsContext);

export default usePostedJobsContext;
