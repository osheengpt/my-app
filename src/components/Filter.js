import React from "react";
import { useLoadingHandler, useErrorHandler } from "../hooks";
import { getSkills } from "../services/jobServices";
import "./Filter.css";

export default function Filter({ selectedSkills, setSelectedSkills }) {
  const [skills, setSkills] = React.useState([]);
  const { loading, setLoading } = useLoadingHandler();
  const { error, setError, showError } = useErrorHandler();

  React.useEffect(() => {
    setLoading(true);
    getSkills()
      .then((res) => {
        setSkills(res);
      })
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading, setError]);

  const handleCheck = (e) => {
    var updatedSkills = [...selectedSkills];
    if (e.target.checked) {
      updatedSkills = [...updatedSkills, e.target.value];
    } else {
      updatedSkills.splice(updatedSkills.indexOf(e.target.value), 1);
    }
    setSelectedSkills(updatedSkills);
  };

  if (error) {
    return showError();
  }

  return (
    <div className="filter-grid">
      <span className="heading">🔍 Refine Job Search</span>
      <h4>Skill Set</h4>
      {loading ? (
        <div>Loading...</div>
      ) : (
        skills.map((skill, i) => (
          <div className="checkbox" key={i}>
            <input type="checkbox" value={skill} onChange={handleCheck} />
            <span>{skill}</span>
          </div>
        ))
      )}
    </div>
  );
}
