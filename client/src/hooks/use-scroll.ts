import { useState, useEffect } from 'react';

type UseScrollOptions = {
  offset?: number;
  direction?: 'up' | 'down';
};

export const useScroll = (options: UseScrollOptions = {}) => {
  const { offset = 100, direction = 'down' } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (direction === 'down') {
        setIsScrolled(window.pageYOffset > offset);
      } else {
        // For 'up' direction, we check if we've scrolled back up beyond the offset
        setIsScrolled(window.pageYOffset < offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset, direction]);

  return isScrolled;
};

export default useScroll;
