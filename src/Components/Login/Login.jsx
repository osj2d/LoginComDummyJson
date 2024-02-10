import React from "react";
import styles from "./Login.module.css";
import Input from "./Form/Input";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";

const Login = () => {
  const username = useForm();
  const password = useForm();
  const [dados, setDados] = React.useState(false);
  const { userLogin, error, loading } = React.useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  function handleShowUser() {
    setDados((current) => !current);
    console.log(dados);
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <button className={styles.btn}>Entrar</button>
        {error && (
          <p className={`${styles.errorLogin} error`}>
            Erro ao acessar: {error}
          </p>
        )}
      </form>
      <div className={styles.usuario}>
        <p>username: kminchelle</p>
        <p>password: 0lelplR </p>
      </div>
    </div>
  );
};

export default Login;
