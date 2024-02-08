import React, { Children } from "react";
import useFetch from "./Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { Get_User, Post_Login } from "./Api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [login, setLogin] = React.useState(false);
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  //Fazer UseEffect do userContext

  async function getUser(token) {
    const { url, options } = Get_User(token);
    const response = await fetch(url, options);
    if (response.ok === true) return setLogin(true);
  }

  async function userLogin(username, password) {
    const { url, options } = Post_Login({ username, password });
    const { json } = await request(url, options);
    const { token } = await json;
    window.localStorage.setItem("token", token);
    await getUser(token);
    navigate("conta");
  }

  return (
    <UserContext.Provider value={{ userLogin, data, error, loading, login }}>
      {children}
    </UserContext.Provider>
  );
};


