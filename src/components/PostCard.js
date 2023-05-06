import React from "react";
import Pic from "../images/job-post.jpeg";
import "./PostCard.css";

export default function PostCard({ post }) {
  const [isApplied, setIsApplied] = React.useState(false);
  return (
    <div className="container">
      <div className="content">
        <div className="post-img">
          <img src={Pic} alt="JobPost" />
        </div>
        <div className="right-content">
          <div className="details">
            <span className="position">{post?.position}</span>
            <span className="company">{post?.company} Compnay</span>
            <span className="sub-detail">₹ {post?.salary}</span>
            <span className="sub-detail">📍 {post?.location}</span>
            <span className="sub-detail" style={{ fontWeight: "bold" }}>
              {post?.skills.join(", ")}
            </span>
          </div>
          <button
            className={`apply ${isApplied ? "applied" : ""}`}
            onClick={() => setIsApplied(true)}
          >
            Apply
          </button>
        </div>
      </div>
      <span className="date">Posted on: {post.postedOn}</span>
    </div>
  );
}
