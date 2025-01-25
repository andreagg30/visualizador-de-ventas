import { cn } from '@/utils/helpers';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        'hover:bg-pastel-pink rounded-lg bg-orange px-6 py-2 text-lg text-white transition-all duration-500 hover:scale-105',
        className
      )}
    >
      {children}
    </button>
  );
}
