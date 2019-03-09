import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      RE Portfolio
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/home" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/properties"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/properties" className="nav-link">
            Properties
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/owners"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/owners" className="nav-link">
            Owners
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/tenants"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/tenants" className="nav-link">
            Tenants
          </Link>
        </li>
        {/* <li
          className={
            window.location.pathname === "/reports"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/reports" className="nav-link">
            Reports
          </Link>
        </li> */}
      </ul>
    </div>
  </nav>
);

export default Nav;
