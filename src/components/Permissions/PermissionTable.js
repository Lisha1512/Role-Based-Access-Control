import React from "react";

const PermissionTable = ({ permissions, onSelect }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {permissions.map((permission) => (
          <tr key={permission.id}>
            <td>{permission.name}</td>
            <td>{permission.category}</td>
            <td>
              <button
                className="btn btn-secondary"
                onClick={() => onSelect(permission)}
              >
                View Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PermissionTable;
