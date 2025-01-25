import Popper from './Popper';
import IconButton from './IconButton';
import { MenuIcon } from '@/icons';
import usePopper from '@/hooks/usePopper';
import AnchorLink from './AnchorLink';

interface Item {
  name?: string;
  href?: string;
}

interface MenuSelectProps {
  items: Item[];
}

export default function MenuSelect({ items }: MenuSelectProps) {
  const {
    popper,
    handleButtonClick,
    closePopper,
    handlePopperElement,
    isPopperOpen,
    referenceElement,
  } = usePopper();
  return (
    <>
      <IconButton onClick={handleButtonClick} ref={referenceElement}>
        <MenuIcon className="h-7 w-7 fill-white" />
      </IconButton>
      <Popper
        isPopperOpen={isPopperOpen}
        closePopper={closePopper}
        handlePopperElement={handlePopperElement}
        popper={popper}
        className="overflow-hidden rounded-lg border-[1.5px] border-white bg-black"
      >
        {items.map((item, i) => (
          <AnchorLink
            className="border-white-30 rounded-none border-b text-center hover:scale-105"
            key={i}
            onClick={() => closePopper()}
            href={item.href || ''}
          >
            {item.name}
          </AnchorLink>
        ))}
      </Popper>
    </>
  );
}
