import { cn } from "@/utils/helpers";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className, ...props }: Props) {
  return (
    <div
      className={cn(
        'flex scroll-m-20 flex-col rounded-lg bg-white-10 p-3 text-white',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
