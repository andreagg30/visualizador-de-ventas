import { cn } from '@/utils/helpers';
import { MenuSelect } from '.';
import IconButton from './IconButton';
import { CloseIcon, MenuIcon } from '@/icons';
import { useGlobalContext } from '@/context/GlobalContext';

// const RESPONSIVE_HIDE_CLASSES = 'max-957:hidden';
const RESPONSIVE_SHOW_CLASSES = 'min-957:hidden';

export default function AppBar() {
  const {open, toggleOpen} = useGlobalContext()
  return (
    <header className="fixed left-0 right-0 top-0 z-50 box-border flex h-16 items-center bg-white shadow-[0px_3px_10px_#0000000D] pr-10">
      <div className="flex items-center pl-3">
      <IconButton onClick={toggleOpen}> 
        {
          open ? <CloseIcon className='h-6 w-6 fill-disabled-icon' /> : <MenuIcon className="h-6 w-6 fill-black" />
        }
        
      </IconButton>
        <div className="flex h-16 min-w-60 items-center gap-3 px-4">
          <img src='pana_panama.webp' className='h-12' />
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
