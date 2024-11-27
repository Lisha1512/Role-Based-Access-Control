import React, { useState } from "react";

const AddRoleModal = ({ onClose, onSubmit }) => {
  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");

  const handleSubmit = () => {
    if (roleName.trim() && roleDescription.trim()) {
      onSubmit({ name: roleName, description: roleDescription });
      onClose(); // Close the modal after adding the role
    } else {
      alert("Both fields are required.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Role</h2>
        <label>
          Role Name:
          <input
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            placeholder="Enter role name"
          />
        </label>
        <label>
          Description:
          <textarea
            value={roleDescription}
            onChange={(e) => setRoleDescription(e.target.value)}
            placeholder="Enter role description"
          ></textarea>
        </label>
        <div className="modal-actions">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add Role
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoleModal;
