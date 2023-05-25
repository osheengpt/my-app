import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostedJobsContext } from "../hooks";
import TagInput from "../common/TagInput";
import "./PostJob.css";

const initFormData = {
  title: "",
  description: "",
  company: "",
  salary: "",
  skills: [],
  recruiterName: "",
  recruiterEmail: "",
};

const PostJob = () => {
  const [formData, setFormData] = useState(initFormData);
  const [skills, setSkills] = useState([]);
  const { addPost } = usePostedJobsContext();
  const navigate = useNavigate();

  const handlePostClick = (e) => {
    e.preventDefault();
    addPost({ id: new Date(), ...formData, skills });
    navigate("/employer");
  };

  const handleChange = (e) => {
    let updatedForm = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedForm);
  };

  return (
    <div className="postjob-container">
      <h1 className="postjob-header">ENTER JOB DETAILS</h1>
      <form className="postjob-form" onSubmit={handlePostClick}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter job title"
          value={formData.title}
          onChange={handleChange}
        />
        <label>Description:</label>
        <textarea
          name="description"
          placeholder="Enter job description"
          value={formData.description}
          onChange={handleChange}
        />
        <label>Company:</label>
        <input
          type="text"
          name="company"
          placeholder="Enter company name"
          value={formData.company}
          onChange={handleChange}
        />
        <label>Skills:</label>
        <TagInput selectedItems={skills} setSelectedItems={setSkills} />
        <label>Salary per hour:</label>
        <input
          type="text"
          name="salary"
          placeholder="Enter per hour salary"
          value={formData.salary}
          onChange={handleChange}
        />
        <label>Recruiter Name:</label>
        <input
          type="text"
          name="recruiterName"
          placeholder="Enter recruiter name"
          value={formData.recruiterName}
          onChange={handleChange}
        />
        <label>Recruiter Email:</label>
        <input
          type="email"
          name="recruiterEmail"
          placeholder="Enter recruiter email"
          value={formData.recruiterEmail}
          onChange={handleChange}
        />
        <button>Post</button>
      </form>
    </div>
  );
};

export default PostJob;
