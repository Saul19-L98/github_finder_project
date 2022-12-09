import React, { useReducer } from "react";
import { createContext } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  // NOTE: This was the way before using "Reducers"
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //IMPORTANT: Fetch Users from Github API
  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   //Get initial users(testing purposes)
  //   const data = await response.json();
  //   // console.log(data);
  //   // NOTE: This was the way before using "Reducers"
  //   // setUsers(data);
  //   // setLoading(false);
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };

  // const clearUsers = () => dispatch({ type: "SET_EMPTY" });

  // //Set Loading
  // const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
