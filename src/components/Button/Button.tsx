import React, { FC } from "react";
import { ButtonProps } from "./Button.interface";
import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({ label }) => {
  return <button className={styles.Button}>{label}</button>;
};

export default Button;
