import React from "react";
import { Link } from "react-router-dom";
import { USER_TYPE } from "../utils/consts";
import { useAuthContext } from "../hooks";
import "./Navbar.css";

function Navbar() {
  const { auth, removeUserAuth } = useAuthContext();

  return (
    <section className="navbar">
      <div className="header">
        <h2 className="title">JOB - PORTAL</h2>
        {auth && (
          <div className="header-menu">
            {auth.type === USER_TYPE.EMPLOYER && (
              <>
                <Link to="/postjob">POST JOB</Link>
                <Link to="/employer">POSTED JOBS</Link>
              </>
            )}
            <Link to="/login" onClick={removeUserAuth}>
              LOGOUT
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Navbar;
