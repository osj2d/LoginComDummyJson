import React from "react";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { Get_User } from "../../Api";
import styles from "./Conta.module.css";

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
    navigate("/");
  }

  if (error) return console.log("error");
  if (loading) return console.log("loading");
  if (data) {
    return (
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={data.image} alt="" />
        </div>
        <div className={styles.dados}>
          <p>Username: {data.username}</p>
          <p>first Name: {data.firstName}</p>
          <p>last Name: {data.lastName}</p>
          <p>gender: {data.gender}</p>
          <p>Email: {data.email}</p>
          <button className={styles.btn} onClick={handleToken}>
            Sair
          </button>
        </div>
      </div>
    );
  }
};

export default Conta;
