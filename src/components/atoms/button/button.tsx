import { FC, PropsWithChildren } from "react";
import "./button.scss";

interface ButtonProps extends PropsWithChildren {
  size?: "small" | "medium";
  type?: "primary" | "secondary" | "circular";
  onClick: VoidFunction;
}

export const Button: FC<ButtonProps> = ({
  size = "medium",
  type = "primary",
  children,
  onClick,
}) => {
  return (
    <button aria-label={`${type}-button`} className={`btn btn--${size} btn--${type}`} onClick={onClick}>
      {children}
    </button>
  );
};
