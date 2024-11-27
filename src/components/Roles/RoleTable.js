import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const RoleTable = ({ roles, onEdit, onDelete, onSelect }) => {
  if (roles.length === 0) {
    return (
      <p className="placeholder">No roles available. Please add a role.</p>
    );
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr
            key={role.id}
            onClick={() => onSelect(role)}
            className="table-row"
          >
            <td>{role.name}</td>
            <td>{role.description}</td>
            <td>
              <button
                className="btn btn-secondary"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent row selection
                  onEdit(role);
                }}
              >
                <FaEdit /> Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(role.id);
                }}
              >
                <FaTrashAlt /> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoleTable;
