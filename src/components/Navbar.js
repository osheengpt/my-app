import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks";
import Logo from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  const { auth } = useAuthContext();

  return (
    <section className="navbar">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        {!auth && (
          <div className="header-menu">
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Navbar;
