import React, { useState } from "react";
import PermissionTable from "../components/Permissions/PermissionTable";
import AddPermissionModal from "../components/Permissions/AddPermissionModal";

const PermissionsPage = () => {
  const [permissions, setPermissions] = useState([
    {
      id: 1,
      name: "View Users",
      category: "User Management",
      description: "Can view all users.",
    },
    {
      id: 2,
      name: "Edit Users",
      category: "User Management",
      description: "Can edit user details.",
    },
    {
      id: 3,
      name: "Publish Articles",
      category: "Content Management",
      description: "Can publish articles.",
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddPermission = (newPermission) => {
    setPermissions([...permissions, { id: Date.now(), ...newPermission }]);
  };

  const handleSelectPermission = (permission) => {
    setSelectedPermission(permission);
  };

  const handleClosePermissionDetails = () => {
    setSelectedPermission(null);
  };

  const filteredPermissions = permissions.filter((perm) =>
    perm.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page">
      <header className="page-header">
        <h1>Permissions</h1>
        <p>
          Manage permissions for your system. Add, edit, or view details of
          specific permissions.
        </p>
      </header>

      <div className="permission-actions">
        <button
          className="btn btn-primary"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Permission
        </button>
        <input
          type="text"
          className="search-bar"
          placeholder="Search Permissions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="permission-layout">
        <div className="permission-table-section">
          <h3>Permission Categories</h3>
          <PermissionTable
            permissions={filteredPermissions}
            onSelect={handleSelectPermission}
          />
        </div>

        {selectedPermission && (
          <div className="permission-details">
            <div className="permission-details-header">
              <h3>Permission Details</h3>
              <button
                className="btn btn-close"
                onClick={handleClosePermissionDetails}
              >
                ×
              </button>
            </div>
            <p>
              <strong>Name:</strong> {selectedPermission.name}
            </p>
            <p>
              <strong>Category:</strong> {selectedPermission.category}
            </p>
            <p>
              <strong>Description:</strong> {selectedPermission.description}
            </p>
          </div>
        )}
      </div>

      {isAddModalOpen && (
        <AddPermissionModal
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddPermission}
        />
      )}
    </div>
  );
};

export default PermissionsPage;
