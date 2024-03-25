import React from "react";
import { IButtonProps } from "./Button.interface";
import { useStyles } from "./Button.styles";

export const Button: React.FC<IButtonProps> = ({ label }) => {
  const styles = useStyles();

  return <button className={styles.Button}>{label}</button>;
};
