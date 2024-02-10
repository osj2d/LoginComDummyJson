import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, name, type, value, onChange, error }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={name}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
