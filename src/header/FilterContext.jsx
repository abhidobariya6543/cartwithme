import React, { createContext, useContext, useState } from "react";
const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [filters,setFilters]=useState([])
  const [priceRange,setPriceRange] =useState({min:'Min',max:'10000+'})
  const [selectedFilters,setSelectFilters]=useState([])
  const pricesteps = ['Min',200,500,2000,5000,10000,'10000+']

  return (
    <FilterContext.Provider value={{ activeFilters, setActiveFilters,priceRange,setPriceRange,selectedFilters,setSelectFilters,pricesteps,filters,setFilters}}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
