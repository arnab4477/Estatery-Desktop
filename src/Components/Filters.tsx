import {
  PropertyMenu,
  LocationMenu,
  PriceMenu,
  DatePicker,
} from './FilterMenu';

export const Filters = () => {
  return (
    <div className="flex flex-row justify-evenly items-start">
      <LocationMenu />
      <DatePicker />
      <PriceMenu />
      <PropertyMenu />
    </div>
  );
};
