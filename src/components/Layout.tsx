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
      <main className={cn("relative min-h-screen py-16", {'pl-56': open})}>
        
          <Outlet />
      </main>
    </div>
  );
}
