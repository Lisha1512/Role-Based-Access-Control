import React from "react";

const RoleDetails = ({ role }) => {
  return (
    <div className="role-details">
      <h2>Role Details</h2>
      <p>
        <strong>Name:</strong> {role.name}
      </p>
      <p>
        <strong>Description:</strong> {role.description}
      </p>
    </div>
  );
};

export default RoleDetails;
