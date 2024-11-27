import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            🏠 Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            👤 Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/roles"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            ⚙️ Roles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/permissions"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            🔒 Permissions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auditlogs"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            📜 Audit Logs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
