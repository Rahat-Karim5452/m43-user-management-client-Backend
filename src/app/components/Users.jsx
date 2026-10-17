import React, { use } from "react";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise());
  return (
    <div>
      <h2>Users : {users.length}</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};
export default Users;
