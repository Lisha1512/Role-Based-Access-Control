import React, { useState } from "react";

const AddUserModal = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = () => {
    onSubmit({ name, email, role });
    onClose();
  };

  return (
    <div className="modal">
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Viewer">Viewer</option>
      </select>
      <button onClick={handleSubmit}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddUserModal;
