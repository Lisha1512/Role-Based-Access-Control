import React, { useState } from "react";

const AssignRoleModal = ({ onClose, onAssign, availableRoles }) => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleAssign = () => {
    if (selectedRole) {
      onAssign(selectedRole);
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Assign Role</h2>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">Select a Role</option>
          {availableRoles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
        <div className="modal-actions">
          <button onClick={handleAssign}>Assign</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AssignRoleModal;
