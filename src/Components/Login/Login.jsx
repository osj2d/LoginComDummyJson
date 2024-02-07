import React from "react";
import styles from "./Login.module.css";
import Input from "./Form/Input";
import useForm from "../../Hooks/useForm";

const Login = () => {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
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
