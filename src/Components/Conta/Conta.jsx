import React from "react";
import { UserContext } from "../../UserContext";

const Conta = () => {
  const { data, error, loading } = React.useContext(UserContext);

  // React.useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   getUser(token);
  // }, [getUser]);
  // if (login) {
  //   console.log(data);
  // }
  if (error) return console.log("error");
  if (loading) return console.log("loading");
  if (data) {
    console.log(data.username);
    return <div><p>{data.username}</p></div>;
  }
};

export default Conta;
