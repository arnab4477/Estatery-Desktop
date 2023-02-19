export const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center p-2 w-[1150px]">
      <div className="flex flex-row justify-evenly items-center p-2 w-[650px]">
        <p className="p-3 text-xl">Estatery</p>
        <p className="p-3 text-purple-500 bg-purple-200 rounded-lg">Rent</p>
        <p className="p-3 text-black ">Buy</p>
        <p className="p-3 text-black ">Sell</p>
        <p className="p-3 text-black ">Manage Property</p>
        <p className="p-3 text-black ">Resources</p>
      </div>
      <div className="flex flex-row justify-evenly items-center p-3 w-48">
        <button className="w-max p-3 rounded-lg text-sm text-purple-500 bg-purple-200">
          Login
        </button>
        <button className="w-max p-3 rounded-lg text-sm text-white bg-purple-500">
          Sign up
        </button>
      </div>
    </div>
  );
};
