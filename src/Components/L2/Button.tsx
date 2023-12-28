import * as React from "react";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../Utils/twmerge";
import ButtonL1 from "../L1/ButtonL1";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-[#C19862] text-white hover:bg-[#C19862C4]",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-[#C19862] text-[#C19862] hover:bg-[#C19862] hover:text-[#ffff]",
        link: "hover:underline text-black",
        //We can define defalut size and styling for icons here according to website
        icon: "",
      },
      size: {
        default: "h-9 px-2",
        lg: "w-[207px] h-[58px] py-2 px-4 text-[22px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
  href?: string;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, isLoading, ...props }, ref) => {
    return (
      <ButtonL1
        href={href}
        disabled={isLoading}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {!isLoading
          ? children
          : // A spinner or something
            "Loading..."}
      </ButtonL1>
    );
  }
);

export { Button };
