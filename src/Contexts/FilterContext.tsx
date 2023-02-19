import {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

// Type for the filters
interface FilterType {
  location: string;
  when: string;
  price: [string, string];
  propertyType: string;
}

// Type for the context
type FilterContextType = [
  FilterType | null,
  Dispatch<SetStateAction<FilterType>> | null
];

const FilterCTX = createContext<FilterContextType>([null, null]);

export const FilterContext = ({ children }) => {
  // Initial data and state for the filters
  const InitialFilters: FilterType = {
    location: '',
    when: '',
    price: ['', ''],
    propertyType: '',
  };
  const filterState = useState(InitialFilters);

  return (
    <FilterCTX.Provider value={filterState}>{children}</FilterCTX.Provider>
  );
};

export const useFilterState = () => useContext(FilterCTX);
