import { createContext, useReducer } from "react";
import GithubReducer from "./Github_Reducer";

const GithubContext = createContext();

export const Githubprovider = ({ children }) => {
  const initialState = {
    Users: [],
    User:{},
    isloadind: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchusers = async (text) => {
    Setloading();
    const params = new URLSearchParams({
      q: text,
    });
    const resp = await fetch(
      `${process.env.REACT_APP_GIT_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token${process.env.REACT_APP_TOKEN}`,
        },
      }
    );
    console.log(resp)
    const { items } = await resp.json();
    
    dispatch({
      type: "Get_Users",
      payload: items,
    });
  };

  // fetching single user this methood
  const oneuser = async (login) => {
    Setloading();
    
    const resp = await fetch(`https://api.github.com/users/${login}`, {
      headers: {
        Authorization: `token${process.env.REACT_APP_TOKEN}`,
      },
    });
    console.log(resp)
    if(resp.status === 404){
      window.location ="/notfounff"
    }
    else{
      const data = await resp.json();
    
      dispatch({
        type: "Get_User",
        payload: data,
      });

    }
    
  };

  const Setloading = () => {
    dispatch({ type: "Set_Loading" });
  };
  const ClearUsers = () => {
    dispatch({ type: "Clear_User" });
  };

  return (
    <GithubContext.Provider
      value={{
        Users: state.Users,
        isloadind: state.isloadind,
        fetchusers,
        ClearUsers,
        User:state.User,
        oneuser
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
