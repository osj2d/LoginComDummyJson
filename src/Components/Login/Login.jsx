import React from "react";
import styles from "./Login.module.css";
import Input from "./Form/Input";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";

const Login = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input label="Usuario" type="text" name="username" {...username} />
      <Input label="Senha" type="password" name="password" {...password} />
      <button>Entrar</button>
    </form>
  );
};

export default Login;
