import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import SideBar from './SideBar';
import { cn } from '@/utils/helpers';
import { useGlobalContext } from '@/context/GlobalContext';

export default function Layout() {
  const { open } = useGlobalContext()
  return (
    <div className="font-onest bg-background">
      <AppBar />
      <SideBar />
      <main className={cn("relative min-h-screen py-16", {'pl-60': open})}>
        
         <div className='flex flex-col p-3'> <Outlet /></div>
      </main>
    </div>
  );
}
