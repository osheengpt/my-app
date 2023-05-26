import React from "react";
import { useLoadingHandler, useErrorHandler } from "../hooks";
import { getJobs } from "../services/jobServices";
import Pagination from "../common/Pagination";
import PostCard from "./PostCard";
import Filter from "./Filter";
import NotFound from "./NotFound";
import "./FreelancerHome.css";

const Home = () => {
  const [posts, setPosts] = React.useState([]);
  const [selectedSkills, setSelectedSkills] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedSalaryRange, setSelectedSalaryRange] = React.useState([
    0, 50000,
  ]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const { loading, setLoading, showLoader } = useLoadingHandler();
  const { error, setError, showError } = useErrorHandler();

  React.useEffect(() => {
    setLoading(true);
    getJobs(page, searchTerm, selectedSkills, selectedSalaryRange)
      .then((res) => {
        setTotal(res.total);
        setPosts(res.data);
      })
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [
    page,
    searchTerm,
    selectedSkills,
    selectedSalaryRange,
    setLoading,
    setError,
  ]);

  if (error) {
    return showError();
  }

  return (
    <>
      {loading && showLoader()}
      <h1 className="home-heading">JOB POSTS</h1>
      <div className="layout">
        <Filter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSkills={selectedSkills}
          selectedSalaryRange={selectedSalaryRange}
          setSelectedSkills={setSelectedSkills}
          setSelectedSalaryRange={setSelectedSalaryRange}
        />
        <div className={`posts-grid ${posts.length === 0 ? "center" : ""}`}>
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <NotFound />
          )}
        </div>
      </div>
      {total > 1 && <Pagination page={page} total={total} setPage={setPage} />}
    </>
  );
};

export default Home;
