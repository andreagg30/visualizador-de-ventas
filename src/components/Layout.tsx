import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

export default function Layout() {
  return (
    <div className="font-onest">
      <AppBar />
      <main className="relative min-h-screen py-16">
        <div className="max-780:px-3 relative z-10 flex flex-col px-[10%] text-white">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
