export interface PillProps {
  title: string
}

type ButtonSize = "small" | "medium" | "large";
type ButtonShape = "rounded-sm" | "rounded-md" | "rounded-full";
export interface ButtonProps {
  title: string;
  size?: ButtonSize;
  shape?: ButtonShape;
  className?: string;
  onClick?: () => void;
}