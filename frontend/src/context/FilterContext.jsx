import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  return (
    <FilterContext.Provider
      value={{
        category,
        setCategory,
        sort,
        setSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);