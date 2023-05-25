import React from "react";
import usePostedJobsContext from "../hooks/usePostedJobsContext";
import JobPost from "./JobPost";
import NotFound from "./NotFound";

export default function EmployerHome() {
  const { postedJobs } = usePostedJobsContext();

  return (
    <>
      <h1 className="home-heading">POSTED JOBS</h1>
      <div className="posts-grid">
        {postedJobs.length > 0 ? (
          postedJobs.map((post) => <JobPost key={post.id} post={post} />)
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
}
