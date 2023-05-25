import React from "react";
import Pic from "../images/job-post.jpeg";
import "./JobPost.css";

export default function JobPost({ post }) {
  return (
    <div className="container">
      <div className="content">
        <div className="post-img">
          <img src={Pic} alt="JobPost" />
        </div>
        <div className="right-content">
          <div className="details">
            <span className="position">{post?.title}</span>
            <span className="company">{post?.company} Compnay</span>
            <span className="sub-detail">₹ {post?.salary} / Hour</span>
            <span className="sub-detail" style={{ fontWeight: "bold" }}>
              {post?.skills.join(", ")}
            </span>
          </div>
          <button className="apply">View Applications ➜</button>
        </div>
      </div>
      <span className="postedBy">
        Posted By: {post.recruiterName}, {post.recruiterEmail}
      </span>
    </div>
  );
}
