import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import SideBar from './SideBar';

export default function Layout() {
  return (
    <div className="font-onest bg-background">
      <AppBar />
      <SideBar />
      <main className="relative min-h-screen py-16">
        <div className="max-780:px-3 relative z-10 flex flex-col px-[10%] bg-gray-800 text-white">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
