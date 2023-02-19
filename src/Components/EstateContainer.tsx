import { useFilterState } from '../Contexts';
import EstateData, { EstateType } from '../RealEstateData';
import { EstateCard } from './EstateCard';
import { useState, useEffect } from 'react';

export const EstateContainer = () => {
  const [filteredData, setFilteredData] = useState<EstateType[]>(EstateData);
  const [filters] = useFilterState();

  // This will run each time the filters is updated
  useEffect(() => {
    // Only add the estates that meet all the filters
    setFilteredData!(
      EstateData.filter((estate) => {
        let meetsLocationFilter: boolean = false;
        let meetsPriceFilter: boolean = false;
        let meetsDateFilter: boolean = false;
        let meetsPropertyFilter: boolean = false;

        for (let key in filters) {
          if (key === 'location') {
            if (
              filters[key] === '' ||
              filters[key].toLowerCase() === estate[key].toLowerCase()
            ) {
              meetsLocationFilter = true;
            }
          }

          if (key === 'price') {
            const noPriceFilter = filters.price[0] === '';
            if (
              noPriceFilter ||
              (estate[key] >= +filters[key][0] &&
                estate[key] <= +filters[key][1])
            ) {
              meetsPriceFilter = true;
            }
          }

          if (key === 'when') {
            const noDateFilters = filters[key] === '';

            // Convert the strings to Dates and see if they meet the filter
            if (
              noDateFilters ||
              (new Date(estate.moveInDate[0]) <= new Date(filters.when) &&
                new Date(estate.moveInDate[1]) >= new Date(filters.when))
            ) {
              meetsDateFilter = true;
            }
          }

          if (key === 'propertyType') {
            if (
              filters[key] === '' ||
              filters[key].toLowerCase() === estate[key].toLowerCase()
            ) {
              meetsPropertyFilter = true;
            }
          }
        }
        // If all of them return true, that means this estate meets all the requirements
        if (
          meetsLocationFilter &&
          meetsPriceFilter &&
          meetsDateFilter &&
          meetsPropertyFilter
        ) {
          return true;
        }

        return false;
      })
    );
  }, [filters]);

  // If there are no estates which meets the requirements
  if (filteredData!.length === 0) {
    return <p>No houses</p>;
  }

  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:w-[1000px]">
      {filteredData!.map((estate) => {
        return <EstateCard key={estate.name} estate={estate} />;
      })}
    </div>
  );
};
