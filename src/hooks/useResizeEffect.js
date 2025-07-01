import { useEffect } from "react";

export const useResizeEffect = (callback, delay = 300) => {
  let timer;
  useEffect(() => {
    const getResize = () => {
      clearTimeout(timer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timer = setTimeout(() => {
        callback();
      }, delay);
    };
    window.addEventListener("resize", getResize);
    return () => {
      window.removeEventListener("resize", getResize);
      if (timer) clearTimeout(timer);
    };
  }, [callback, delay]);
};
