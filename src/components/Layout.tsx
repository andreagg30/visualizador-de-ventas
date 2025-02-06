import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import SideBar from './SideBar';
import { cn } from '@/utils/helpers';
import { useGlobalContext } from '@/context/GlobalContext';
import { FormProvider, useForm } from 'react-hook-form';

export default function Layout() {
  const { open } = useGlobalContext();
  const methods = useForm();

  return (
    <div className="bg-background font-onest">
      <AppBar />
      <SideBar />
      <main className={cn('relative min-h-screen py-16', { 'pl-60': open })}>
        <div className="flex flex-col p-3">
          <FormProvider {...methods}>
            <Outlet />
          </FormProvider>
        </div>
      </main>
    </div>
  );
}
