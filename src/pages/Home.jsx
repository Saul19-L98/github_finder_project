import React from "react";
import UserResults from "../components/users/UserResults.jsx";
import UserSearch from "../components/users/userSearch.jsx";

function Home() {
  return (
    <>
      {/* {`${process.env.REACT_APP_GITHUB_TOKEN}`} */}
      {/* SEARCH COMPONENT LOGO HERE*/}
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
