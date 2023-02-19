import { BiCalendar } from 'react-icons/bi';
import { useState } from 'react';
import { useFilterState } from '../../Contexts';
import moment from 'moment';

export const DatePicker = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Select Move-in Date');

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const [filters, setFilters] = useFilterState();

  const handleFilterClick = () => {
    // Create the date string from input and check if it is valid
    const selectedDate = `${year}-${month}-${day}`;
    const isValidDate = moment(selectedDate).isValid();

    if (!isValidDate) {
      alert('Please enter a valid date');
      return;
    }

    const filtersClone = JSON.parse(JSON.stringify(filters));

    filtersClone!.when = selectedDate;
    setFilters!(filtersClone!);

    // Create a date formate to show in the filters
    setSelected(moment(selectedDate).format('DD MMM YYYY'));
    setOpen(!open);
  };

  const handleAnyClick = () => {
    const filtersClone = JSON.parse(JSON.stringify(filters));

    filtersClone!.when = '';

    setFilters!(filtersClone!);
    setSelected('Select Move-in Date');
    setOpen(!open);
  };

  const onYearChange = (e) => setYear(e.target.value);
  const onMonthChange = (e) => setMonth(e.target.value);
  const onDayChange = (e) => setDay(e.target.value);

  const handleClick = () => {
    setOpen(!open);
  };

  //     //   setSelected(e.target.innerText);
  //     //   setOpen(!open);
  //     console.dir(e.target);
  //     console.log(e.target);
  //   };

  return (
    <div className="flex flex-col justify-center p-1 bg-white m-3 rounded-sm">
      <p className="text-xs relative top-[13px] left-[17px] text-gray-500">
        When
      </p>
      <div
        onClick={handleClick}
        className="text-lg font-bold w-60 h-fit p-3 flex flex-row justify-between items-center
        hover:cursor-pointer"
      >
        <p className="text-start">{selected}</p>
        <BiCalendar />
      </div>
      {open ? (
        <div className="flex flex-col justify-evenly items-center p-1">
          <button
            onClick={handleAnyClick}
            className="w-52 bg-purple-500 hover:bg-purple-700 text-center text-white rounded-sm"
          >
            Any
          </button>
          <form className="flex flex-row justify-around items-center w-52 p-2 border border-purple-400 rounded">
            <input
              className="w-16"
              placeholder={'YYYY'}
              type="text"
              value={year}
              onChange={onYearChange}
            />
            /
            <input
              className="w-16 "
              placeholder={'MM'}
              type="text"
              value={month}
              onChange={onMonthChange}
            />
            /
            <input
              className="w-16 "
              placeholder={'DD'}
              type="text"
              value={day}
              onChange={onDayChange}
            />
          </form>
          <button
            onClick={handleFilterClick}
            className="w-52 bg-purple-500 hover:bg-purple-700 text-center text-white rounded-sm"
          >
            Select
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
