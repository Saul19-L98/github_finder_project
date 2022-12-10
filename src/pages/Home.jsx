import React, { useContext } from "react";
import UserSearch from "../components/users/UserSearch.jsx";
import UserResults from "../components/users/UserResults.jsx";
import GithubContext from "../context/github/GithubContext.js";

function Home() {
  const { users } = useContext(GithubContext);
  return (
    <>
      {/* {`${process.env.REACT_APP_GITHUB_TOKEN}`} */}
      {/* SEARCH COMPONENT LOGO HERE*/}
      <UserSearch />
      {users.length === 0 && (
        <p>
          Write the name of the user you want to search for 👨‍💻. Once you submit
          your request in this section will appear with 1 to 30 matches from
          your input. If you want to know more about this app, you can read thre
          documentation in the about section ❔.
        </p>
      )}
      <UserResults />
    </>
  );
}

export default Home;
