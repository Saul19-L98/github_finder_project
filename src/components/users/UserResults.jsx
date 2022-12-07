import React from "react";
import { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner.jsx";
import UserItem from "./UserItem.jsx";
import GithubContext from "../../context/github/GithubContext.js";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  //NOTE: Just for Testing
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
