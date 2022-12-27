export interface ButtonProps {
  children: string | React.ReactNode;
  theme?: "primary";
  size?: "sm" | "md" | "lg";
  block?: boolean;
  loading?: boolean;
}
