import React from "react";
import Slider from "@material-ui/core/Slider";
import { useLoadingHandler, useErrorHandler } from "../hooks";
import { getSkills } from "../services/jobServices";
import "./Filter.css";

export default function Filter({
  searchTerm,
  setSearchTerm,
  selectedSalaryRange,
  setSelectedSalaryRange,
  selectedSkills,
  setSelectedSkills,
}) {
  const [skills, setSkills] = React.useState([]);
  const { loading, setLoading } = useLoadingHandler();
  const { error, setError, showError } = useErrorHandler();

  React.useEffect(() => {
    setLoading(true);
    getSkills()
      .then((skills) => {
        setSkills(skills);
      })
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading, setError, setSelectedSalaryRange]);

  const handleSkillChange = (e) => {
    var updatedSkills = [...selectedSkills];
    if (e.target.checked) {
      updatedSkills = [...updatedSkills, e.target.value];
    } else {
      updatedSkills.splice(updatedSkills.indexOf(e.target.value), 1);
    }
    setSelectedSkills(updatedSkills);
  };

  const handleSalaryRangeChange = (e, newSalaryRange) => {
    setSelectedSalaryRange(newSalaryRange);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (error) {
    return showError();
  }

  return (
    <div className="filter-grid">
      <span className="heading">🔍 Refine Job Search</span>
      <input
        type="text"
        placeholder="Refine Job Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <h4>Skill Set</h4>
      {loading ? (
        <div>Loading...</div>
      ) : (
        skills.map((skill, i) => (
          <div className="checkbox" key={i}>
            <input type="checkbox" value={skill} onChange={handleSkillChange} />
            <span>{skill}</span>
          </div>
        ))
      )}
      <h4>Salary Per Hour</h4>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Slider
            value={selectedSalaryRange}
            onChange={handleSalaryRangeChange}
            valueLabelDisplay="auto"
            min={0}
            max={50000}
          />
          <p>
            Your range of salary is ₹ {selectedSalaryRange[0]} to ₹{" "}
            {selectedSalaryRange[1]}
          </p>
        </>
      )}
    </div>
  );
}
