import React, { useState } from "react";

const EditRoleModal = ({ role, onClose, onSubmit }) => {
  const [name, setName] = useState(role.name); // Pre-fill name
  const [description, setDescription] = useState(role.description); // Pre-fill description

  const handleSubmit = () => {
    onSubmit({ ...role, name, description }); // Pass updated role back
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Role</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRoleModal;
