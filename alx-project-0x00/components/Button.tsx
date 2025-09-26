import React from "react";
import { ButtonProps, ButtonSize, ButtonShape } from "@/interfaces";

// type ButtonSize = "small" | "medium" | "large";
// type ButtonShape = "rounded-sm" | "rounded-md" | "rounded-full";

// interface ButtonProps {
//   title: string;
//   size?: ButtonSize;
//   shape?: ButtonShape;
//   className?: string;
//   onClick?: () => void;
// }

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`bg-blue-500 text-white font-semibold ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;