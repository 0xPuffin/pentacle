import React, { createContext, useContext, useEffect, useState } from "react";
import { SearchContext } from "./search-provider";
const initVal = {
  title: "",
};

export const TitleDispatchContext = createContext({
  setTitle: () => {},
});

export const TitleContext = createContext(initVal);

export function TitleProvider({ children }) {
  const [title, setTitle] = useState("");
  // const location = useLocation();
  const {activeSection, activeCategory} = useContext(SearchContext);

  useEffect(() => {
    if (activeCategory === 'projects' && activeSection === 'projects') {
    // if (activeSection === 'projects') {
      setTitle('Projects');
    } else {
      setTitle(activeCategory ? `${activeSection} / ${activeCategory}` : activeSection)
    }
  }, [activeCategory]);

  return (
    <TitleContext.Provider value={{ title }}>
      <TitleDispatchContext.Provider value={{ setTitle }}>
        {children}
      </TitleDispatchContext.Provider>
    </TitleContext.Provider>
  );
}
