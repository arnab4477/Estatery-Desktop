import { BiChevronDown } from 'react-icons/bi';
import { useState } from 'react';
import { useFilterState } from '../../Contexts';

export const PropertyMenu = () => {
  const propertyTypeArr = ['Any', 'House', 'Apartment'];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Any');
  const [filters, setFilters] = useFilterState();

  const handleFilterClick = (e) => {
    const selectedOption = e.target.innerText;

    const filtersClone = JSON.parse(JSON.stringify(filters));

    if (selectedOption === 'Any') {
      filtersClone!.propertyType = '';
      setFilters!(filtersClone!);

      setSelected(selectedOption);
      setOpen(!open);

      return;
    }

    filtersClone!.propertyType = selectedOption;
    setFilters!(filtersClone!);

    setSelected(selectedOption);
    setOpen(!open);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col justify-center p-1 bg-white m-4 rounded-sm">
      <p className="text-xs relative top-[13px] left-[17px] text-gray-500">
        Property Type
      </p>
      <div
        onClick={handleToggle}
        className="text-lg font-bold w-40 h-fit p-3 flex flex-row justify-between items-center
        hover:cursor-pointer"
      >
        <p className="text-start">{selected}</p>
        <BiChevronDown className={`${open && 'rotate-180'} text-purple-400`} />
      </div>
      {open ? (
        <ul
          onClick={handleFilterClick}
          className="lists flex flex-col w-44 max-h-28"
        >
          {propertyTypeArr.map((propertyType) => {
            return (
              <li
                key={propertyType}
                className="text-xl flex justify-center items-center w-full list-none h-7 p-1 text-black hover:text-white bg-white hover:bg-purple-600
                hover:cursor-pointer"
              >
                {propertyType}
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};
