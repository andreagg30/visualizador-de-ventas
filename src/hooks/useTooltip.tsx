import { useRef, useState, useEffect } from 'react';

export default function useTooltip() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsTooltipVisible(false);
    }, 200);
  };

  const handleScroll = () => {
    setIsTooltipVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTooltipVisible]);

  return {
    isTooltipVisible,
    handleMouseEnter,
    handleMouseLeave,
  };
}
