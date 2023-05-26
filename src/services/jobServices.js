import jobs from "../data/jobpost.json";

function filterJobsWithSalaryRange(selectedSalaryRange) {
  return jobs.filter(
    ({ salary }) =>
      salary >= selectedSalaryRange[0] && salary <= selectedSalaryRange[1]
  );
}

function filterJobsWithSkills(selectedSkills, filteredJobs) {
  return filteredJobs.filter((job) => {
    return selectedSkills.every((skill) => job.skills.includes(skill));
  });
}

export const getJobs = (
  page = 1,
  searchTerm,
  selectedSkills = [],
  selectedSalaryRange = [],
  size = 8
) => {
  return new Promise((resolve) => {
    let start = page * size - size;
    let end = page * size;
    let filteredJobs = jobs;

    if (selectedSalaryRange.length > 0) {
      filteredJobs = filterJobsWithSalaryRange(selectedSalaryRange);
    }
    if (selectedSkills.length > 0) {
      filteredJobs = filterJobsWithSkills(selectedSkills, filteredJobs);
    }
    if (searchTerm) {
      filteredJobs = filteredJobs.filter(({ company }) =>
        company.startsWith(searchTerm)
      );
    }

    let total = Math.ceil(filteredJobs.length / size);

    setTimeout(resolve, 1000, {
      data: filteredJobs.slice(start, end),
      total,
    });
  });
};

export const getSkills = () => {
  return new Promise((resolve) => {
    let skillSet = new Set();
    jobs.forEach(({ skills }) => {
      skillSet.add(...skills);
    });
    setTimeout(resolve, 2000, [...skillSet]);
  });
};
