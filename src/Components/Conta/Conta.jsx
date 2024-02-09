import React from "react";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { Get_User } from "../../Api";

const Conta = () => {
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function login() {
      const token = window.localStorage.getItem("token");
      const { url, options } = Get_User(token);
      await request(url, options);
    }
    login();
  }, [request]);

  function handleToken() {
    localStorage.removeItem("token");
    navigate("/")
  }

  if (error) return console.log("error");
  if (loading) return console.log("loading");
  if (data) {
    return (
      <div>
        <p>Username: {data.username}</p>
        <p>Email: {data.Email}</p>
        <p>first Name: {data.firstName}</p>
        <p>last Name: {data.lastName}</p>
        <p>gender: {data.gender}</p>
        <img src={data.image} alt="" />
        <button onClick={handleToken}>Sair</button>
      </div>
    );
  }
};

export default Conta;
