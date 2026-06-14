import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="rounded-md px-4 py-2 disabled:opacity-50"
      {...props}
    >
      {children}
    </button>
  );
}