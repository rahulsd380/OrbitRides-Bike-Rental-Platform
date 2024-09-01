import { ReactNode, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  classNames? : string;
  variant?: "primary" | "secondary" | "warning";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  
};

const Button = ({ children,onClick,  classNames, variant = "secondary" }: ButtonProps) => {
  const baseClasses = 'px-5 py-2 rounded font-SpaceGrotesk font-medium focus:outline-none';
  
  // Definining variant classes
  const variantClasses = {
    primary: 'bg-[#85A98D] border-[#85A98D] text-white',
    warning: 'bg-rose-600 border-rose-600 text-white',
    secondary: 'bg-[#E9ECF2]/20 border border-[#364F53]/30 text-[#85A98D] hover:bg-[#85A98D] hover:text-white transition duration-300',
  };

  const buttonClasses = twMerge(classNames,baseClasses, variantClasses[variant]);

  return <button onClick={onClick} className={buttonClasses}>{children}</button>;
};

export default Button;
