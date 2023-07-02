import { useLayoutEffect, useMemo, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function updateSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useLayoutEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const size = useMemo(() => {
    const { width } = windowSize;
    if (width >= 1600) return "xxl";
    else if (width >= 1200) return "xl";
    else if (width >= 992) return "lg";
    else if (width >= 768) return "md";
    else if (width >= 576) return "sm";
    return "xs";
  }, [windowSize.width]);

  const isMobile = useMemo(() => ["md", "sm", "xs"].includes(size), [size]);

  return { ...windowSize, size, isMobile };
}
