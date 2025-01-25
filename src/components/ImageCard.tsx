import { ArrowOutwardIcon } from '@/icons';
import { cn } from '@/utils/helpers';

interface Props extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  src?: string;
  title?: string;
  description?: string;
  link?: string;
}

export default function ImageCard({
  className,
  src,
  title,
  description,
  link,
}: Props) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={cn(
          'group relative flex min-h-[400px] cursor-pointer select-none flex-col overflow-hidden rounded-lg border border-white-80 shadow-sm transition-all',
          className
        )}
      >
        <div className="flex h-40 w-full items-start overflow-hidden">
          <img src={src} className="w-full" />
        </div>
        <div className="flex flex-1 flex-col justify-end p-3 pt-8">
          <span className="mb-2 text-lg font-bold leading-none text-white">
            {title}
          </span>
          <p className="text-deep-aquamarine text-justify font-light text-white">
            {description}
          </p>
          <div className="flex flex-1 items-end justify-end transition-all group-hover:pb-0.5">
            <ArrowOutwardIcon className="fill-orange transition-all" />
          </div>
        </div>
      </div>
    </a>
  );
}
