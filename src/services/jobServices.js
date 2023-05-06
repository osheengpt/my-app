import jobs from "../data/jobpost.json";

function filterJobsWithSkills(selectedSkills) {
  return jobs.filter((job) => {
    return selectedSkills.every((skill) => job.skills.includes(skill));
  });
}

export const getJobs = (page = 1, selectedSkills = [], size = 8) => {
  return new Promise((resolve) => {
    let start = page * size - size;
    let end = page * size;
    let filteredJobs = jobs;

    if (selectedSkills.length > 0) {
      filteredJobs = filterJobsWithSkills(selectedSkills);
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
