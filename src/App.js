import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import RolesPage from "./pages/RolesPage";
import PermissionsPage from "./pages/PermissionPage";
import AuditLogsPage from "./pages/AuditLogsPage";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/roles" element={<RolesPage />} />
            <Route path="/permissions" element={<PermissionsPage />} />
            <Route path="/auditlogs" element={<AuditLogsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
