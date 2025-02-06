import { SECTIONS } from '@/constants';
import { useGlobalContext } from '@/context/GlobalContext';
import { cn } from '@/utils/helpers';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SideBar() {
  const { open, handleSideBarItem, sideBarItem } = useGlobalContext();

  const location = useLocation();

  useEffect(() => {
    handleSideBarItem(SECTIONS.find(o => o.path === location.pathname )|| SECTIONS[0])
  }, [location])
  
  return (
    <nav className={cn("fixed transition-all overflow-hidden bottom-0 top-16 z-40 flex w-60 flex-col bg-white shadow-[3px_0px_10px_#0000000D]", {'w-0': !open})}>
      <div className='w-60 flex flex-col'>
      {SECTIONS.map((section, i) => {
        const isActive = sideBarItem.path === section.path
        return  <Link
        className={cn("cursor-pointer focus:outline-none flex focus:bg-disabled-100 border-b py-3 pl-3 transition-all hover:bg-disabled-50", {
          'bg-disabled-100': isActive
        })}
        to={section.path}
        key={i}
      >
        <div className="h-full w-full active:scale-95">{section.title}</div>
        {
          isActive && <div className='bg-secondary h-full w-1.5 rounded-full' />
        }
      </Link>
      })}
      </div>
    </nav>
  );
}
