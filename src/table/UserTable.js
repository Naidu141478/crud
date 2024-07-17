import React from "react";

const UserTable = props => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    {props.users.length > 0 ? (
      props.users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>
            <button 
              onClick={() => {
                props.editRow(user);
              }}
              className="button muted-button m-2"
            >
              Edit
            </button>
            <button
              onClick={() => props.deleteUser(user.id)}
              className="button muted-button"
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No users</td>
      </tr>
    )}
  </table>
);

export default UserTable;
