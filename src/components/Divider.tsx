import { cn } from "@/utils/helpers";

interface Props {
  className?: string;
}

export default function Divider({ className }: Props) {
  return (
    <div className={cn('bg-white-10 h-px w-full rounded-lg', className)} />
  );
}
