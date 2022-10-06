import React, { useEffect, useState } from "react";

const ScrollContext = React.createContext({
  scrollPosition: 0,
});

export const ScrollContextProvider = ({children}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollHandler = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollPosition: scrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
