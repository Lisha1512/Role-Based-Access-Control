import React, { useState } from "react";
import AssignRoleModal from "../components/Users/AssignRoleModal";

const UsersPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Lisha Kumari", role: "Admin" },
    { id: 2, name: "Sankriti Mishra", role: "Editor" },
  ]);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const roles = ["Admin", "Editor", "Viewer"];

  const handleAssignRole = (userId, newRole) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  const openAssignModal = (user) => {
    setSelectedUser(user);
    setIsAssignModalOpen(true);
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>Users</h1>
        <p>Manage the users of your system, and assign roles.</p>
      </header>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => openAssignModal(user)}
                >
                  Assign Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isAssignModalOpen && selectedUser && (
        <AssignRoleModal
          availableRoles={roles}
          onClose={() => setIsAssignModalOpen(false)}
          onAssign={(role) => handleAssignRole(selectedUser.id, role)}
        />
      )}
    </div>
  );
};

export default UsersPage;
