import { SKILL_TAGS } from "./consts";

export const filterTags = (searchTerm, selectedItems = []) => {
  let serachText = searchTerm.toLowerCase();
  return searchTerm
    ? SKILL_TAGS.filter(
        (text) =>
          text.toLowerCase().startsWith(serachText) &&
          !selectedItems.includes(text)
      )
    : SKILL_TAGS.filter((text) => !selectedItems.includes(text));
};

export const validateUser = (user, userAuth) =>
  user.email === userAuth.email && user.password === userAuth.password;

export const setAuthInLocal = (userAuth) => {
  window.localStorage.setItem("UserAuth", JSON.stringify(userAuth));
};

export const removeAuthInLocal = () => {
  window.localStorage.removeItem("UserAuth");
};

export const getAuthInLocal = () => {
  const auth = window.localStorage.getItem("UserAuth");
  if (auth) {
    return JSON.parse(auth);
  }
  return null;
};

export const setPostedJobsInLocal = (postedJobs) => {
  window.localStorage.setItem("PostedJobs", JSON.stringify(postedJobs));
};

export const removePostedJobsInLocal = () => {
  window.localStorage.removeItem("PostedJobs");
};

export const getPostedJobsInLocal = () => {
  const jobs = window.localStorage.getItem("PostedJobs");
  if (jobs) {
    return JSON.parse(jobs);
  }
  return [];
};

const isEmail = (email) => {
  const validEmailRegex = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  return validEmailRegex.test(email);
};

/** Handle form validation for the login form */
export const validateLoginForm = (email, password, setError) => {
  // Check for undefined or empty input fields
  if (!email || !password) {
    setError("Please enter a valid email and password.");
    return false;
  }
  // Validate email
  if (!isEmail(email)) {
    setError("Please enter a valid email address.");
    return false;
  }
  return true;
};
