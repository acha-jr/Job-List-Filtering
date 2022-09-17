import { useState, createContext, useEffect } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState([]);

  const addFilter = (tag) => {
    setFilter((prev) => (!prev.includes(tag) ? [...prev, tag] : [...prev]));
  };

  const removeFilter = (tag) => {
    setFilter((prev) => {
      prev.splice(prev.indexOf(tag), 1);
      return [...prev];
    });
  };

  useEffect(() => {});

  const clearFilter = () => {
    setFilter([]);
  };

  return (
    <FilterContext.Provider
      value={{ filter, addFilter, clearFilter, removeFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
