import { EstateContainer, Header, Filters } from '../Components';
import { BiChevronDown } from 'react-icons/bi';

const MainPage = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:w-[1220px] p-8 bg-gray-100">
      <Header />
      <div className="flex flex-row justify-between w-max relative left-[140px] items-center">
        <h1 className="text-black font-bold text-4xl p-6 relative -left-[290px]">
          Search properties to rent
        </h1>
        <div
          className="text-xs text-gray-500 border rounded bg-white w-60 h-fit p-3 flex flex-row justify-between items-center
        hover:cursor-pointer"
        >
          <p className="text-start">Search with SearchBar</p>
          <BiChevronDown className="text-purple-400" />
        </div>
      </div>
      <div className="bg-white px-3 flex flex-row justify-between items-center">
        <Filters />
        <button className="w-max p-3 rounded-lg text-sm text-white bg-purple-500">
          Search
        </button>
      </div>
      <EstateContainer />
    </div>
  );
};

export default MainPage;
