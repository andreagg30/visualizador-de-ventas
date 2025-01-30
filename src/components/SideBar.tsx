import { SECTIONS } from '@/constants';
import { useGlobalContext } from '@/context/GlobalContext';
import { cn } from '@/utils/helpers';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const { open } = useGlobalContext();
  return (
    <nav className={cn("fixed transition-all overflow-hidden bottom-0 top-16 z-40 flex w-60 flex-col bg-white shadow-[3px_0px_10px_#0000000D]", {'w-0': !open})}>
      <div className='w-60 flex flex-col'>
      {SECTIONS.map((section, i) => (
        <Link
          className="cursor-pointer border-b py-3 pl-3 transition-all hover:bg-disabled-50"
          to={section.path}
          key={i}
        >
          <div className="h-full w-full active:scale-95">{section.title}</div>
        </Link>
      ))}
      </div>
    </nav>
  );
}
