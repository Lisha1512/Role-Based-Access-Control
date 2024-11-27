import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1>Welcome to the RBAC System</h1>
        <p>Manage your users, roles, and permissions seamlessly.</p>
      </div>

      {/* Navigation Cards */}
      <div className="dashboard-cards">
        <Link to="/users" className="dashboard-card">
          <h3>Users</h3>
          <p>Manage all users and their roles</p>
        </Link>
        <Link to="/roles" className="dashboard-card">
          <h3>Roles</h3>
          <p>Define roles and assign permissions</p>
        </Link>
        <Link to="/permissions" className="dashboard-card">
          <h3>Permissions</h3>
          <p>Set permissions for roles</p>
        </Link>
        <Link to="/audit-logs" className="dashboard-card">
          <h3>Audit Logs</h3>
          <p>Track system activities</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
