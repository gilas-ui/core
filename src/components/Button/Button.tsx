import React, { FC } from "react";
import { clsx } from "clsx";
import { ButtonProps } from "./Button.interface";
import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({
  children,
  theme = "primary",
  size = "md",
  block = false,
  loading = false,
}) => {
  return (
    <button
      className={clsx(
        styles.Button,
        styles[theme],
        styles[size],
        { [styles.block]: block },
        { [styles.loading]: loading }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
