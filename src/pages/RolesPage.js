import React, { useState } from "react";
import RoleTable from "../components/Roles/RoleTable";
import AddRoleModal from "../components/Roles/AddRoleModal";
import EditRoleModal from "../components/Roles/EditRoleModal";
import RoleDetails from "../components/Roles/RoleDetails";

const RolesPage = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", description: "Full access to all resources" },
    { id: 2, name: "Editor", description: "Can edit content" },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null); // For showing role details

  const handleAddRole = (newRole) => {
    setRoles([...roles, { id: Date.now(), ...newRole }]);
  };

  const handleEditRole = (updatedRole) => {
    setRoles(
      roles.map((role) => (role.id === updatedRole.id ? updatedRole : role))
    );
    setIsEditModalOpen(false);
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
    if (selectedRole?.id === id) setSelectedRole(null); // Clear details if deleted
  };

  const openEditModal = (role) => {
    setCurrentRole(role);
    setIsEditModalOpen(true);
  };

  return (
    <div className="page roles-page">
      <header className="page-header">
        <h1>Roles</h1>
        <p>Manage roles for your system users. Add, edit, or delete roles.</p>
      </header>
      <button
        className="btn btn-primary"
        onClick={() => setIsAddModalOpen(true)}
      >
        Add Role
      </button>
      <div className="roles-container">
        <div className="roles-table">
          <RoleTable
            roles={roles}
            onEdit={openEditModal}
            onDelete={handleDeleteRole}
            onSelect={(role) => setSelectedRole(role)} // Select a role
          />
        </div>
        <div className="roles-details">
          {selectedRole ? (
            <RoleDetails role={selectedRole} />
          ) : (
            <p className="placeholder">Select a role to see details here.</p>
          )}
        </div>
      </div>
      {isAddModalOpen && (
        <AddRoleModal
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddRole}
        />
      )}
      {isEditModalOpen && (
        <EditRoleModal
          role={currentRole}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditRole}
        />
      )}
    </div>
  );
};

export default RolesPage;
