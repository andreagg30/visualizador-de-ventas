import { TopIcon } from '@/icons';
import { cn, topFunction } from '@/utils/helpers';

interface ButtonProps {
  className?: string;
}

export default function BackToTopButton({ className }: ButtonProps) {
  return (
    <button
      onClick={topFunction}
      className={cn(
        'max-780:hidden fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-orange text-lg text-white transition-all duration-500 hover:animate-bounceUp',
        className
      )}
    >
      <TopIcon className="h-4 w-4 fill-white" />
    </button>
  );
}
