import React, { Suspense } from "react";
import Users from "../components/Users";

const usersPromise = async () => {
  const data = await fetch("http://localhost:5000/users");
  const users = await data.json();
  return users;
};
const UserPage = async () => {
  return (
    <div>
      <Suspense fallback={<h2> Loading...</h2>}>
        <Users usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
};

export default UserPage;
