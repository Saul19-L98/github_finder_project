import React from "react";
import UserSearch from "../components/users/userSearch.jsx";
import UserResults from "../components/users/UserResults.jsx";

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
