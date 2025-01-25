import { cn } from '@/utils/helpers';
import { AnchorHTMLAttributes } from 'react';

interface AnchorLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function AnchorLink({
  href,
  children,
  className,
  ...props
}: AnchorLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'bg-soft-petal hover:bg-pastel-pink rounded-lg px-6 py-2 text-lg text-white transition-all duration-500',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
