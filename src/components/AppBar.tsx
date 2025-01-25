import { cn } from '@/utils/helpers';
import { MenuSelect } from '.';

// const RESPONSIVE_HIDE_CLASSES = 'max-957:hidden';
const RESPONSIVE_SHOW_CLASSES = 'min-957:hidden';

export default function AppBar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 box-border flex h-16 items-center bg-black pr-10 shadow-md">
      <div className="flex">
        <div className="flex h-16 min-w-60 items-center gap-3 px-12">
          Logo
        </div>
      </div>
     
      <div
        className={cn(RESPONSIVE_SHOW_CLASSES, 'flex flex-1 justify-end pr-4')}
      >
        <MenuSelect items={[]} />
      </div>

     
    </header>
  );
}
