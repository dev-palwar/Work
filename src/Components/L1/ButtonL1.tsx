import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

const ButtonL1: React.FC<ButtonProps> = (props: ButtonProps) => {
  return props.href ? (
    <Link href={props.href} className={`${props.className}`}>
      {props.children}
    </Link>
  ) : (
    <button {...props} className={`${props.className}`}>
      {props.children}
    </button>
  );
};

export default ButtonL1;
