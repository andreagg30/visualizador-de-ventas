import { cn } from "@/utils/helpers";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "hover:bg-pastel-pink rounded-3xl bg-primary px-6 py-2 text-lg text-white transition-all duration-500 hover:scale-105",
        className
      )}
      {...props} 
    >
      {children}
    </button>
  );
}
