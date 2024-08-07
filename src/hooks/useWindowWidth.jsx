import { useState, useEffect } from "react";

//categoryChart componentini responsive hale getirmek icin yazdigim bir custom hook
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
