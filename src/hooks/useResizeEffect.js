import { useEffect } from 'react';

const useResizeEffect = (callback, delay = 300) => {
  let timer;
  useEffect(() => {
    const handleResize = () => {
      clearTimeout(timer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timer = setTimeout(() => {
        callback();
      }, delay);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timer) clearTimeout(timer);
    };
  }, [callback, delay]);
};
export default useResizeEffect;
