import React, { useState } from "react";

const AddPermissionModal = ({ onClose, onSubmit }) => {
  const [permissionName, setPermissionName] = useState("");
  const [permissionDescription, setPermissionDescription] = useState("");

  const handleSubmit = () => {
    if (permissionName.trim() && permissionDescription.trim()) {
      onSubmit({ name: permissionName, description: permissionDescription });
      onClose(); // Close the modal after adding the permission
    } else {
      alert("Both fields are required.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Permission</h2>
        <label>
          Permission Name:
          <input
            type="text"
            value={permissionName}
            onChange={(e) => setPermissionName(e.target.value)}
            placeholder="Enter permission name"
          />
        </label>
        <label>
          Description:
          <textarea
            value={permissionDescription}
            onChange={(e) => setPermissionDescription(e.target.value)}
            placeholder="Enter permission description"
          ></textarea>
        </label>
        <div className="modal-actions">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add Permission
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPermissionModal;
