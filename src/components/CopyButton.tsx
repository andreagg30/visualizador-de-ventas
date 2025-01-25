import { CopyIcon, DoneAllIcon } from '@/icons';
import { useCopy } from '@/hooks';
import { cn } from '@/utils/helpers';
interface Props {
  className?: string;
  value: string;
}
export default function CopyButton({ className, value }: Props) {
  const { copied, handleCopy } = useCopy();
  return (
    <button
      onClick={() => handleCopy(value)}
      className={cn('bg-muted-charcoal cursor-pointer p-2', className)}
    >
      {copied ? (
        <DoneAllIcon className="fill-white" />
      ) : (
        <CopyIcon className="fill-white" />
      )}
    </button>
  );
}
