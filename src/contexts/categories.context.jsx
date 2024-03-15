import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMaps: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMaps, setCategoriesMaps] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMaps(categoryMap)
    }

    getCategoriesMap();
  }, [])

  const value = { categoriesMaps };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
