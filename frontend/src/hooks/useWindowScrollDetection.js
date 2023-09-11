import { useEffect, useState } from "react";

export default function useWindowScrollDetection(
  enabled,
  callback = Function.prototype,
  { offset = 80 } = {},
) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const userIsScrolling = window.pageYOffset > offset;

      setIsScrolling(userIsScrolling);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled, offset, callback]);

  return [isScrolling];
}
