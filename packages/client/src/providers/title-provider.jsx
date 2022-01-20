import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const initVal = {
  title: "",
};

export const TitleDispatchContext = createContext({
  setTitle: () => {},
});

export const TitleContext = createContext(initVal);

export function TitleProvider({ children }) {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/projects") {
      setTitle("Projects");
    }
    if (location.pathname.startsWith("/projects/")) {
      const slug = location.pathname.split("/")[1];
      setTitle(slug.replaceAll("-", ""));
    }
  }, [location.pathname]);

  return (
    <TitleContext.Provider value={{ title }}>
      <TitleDispatchContext.Provider value={{ setTitle }}>
        {children}
      </TitleDispatchContext.Provider>
    </TitleContext.Provider>
  );
}
