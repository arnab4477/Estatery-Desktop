import { EstateType } from '../RealEstateData';
import Icon from './Icon';
import { FaBed, FaBath, FaSquare, FaRegHeart, FaHeart } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useState } from 'react';

export const EstateCard = (props: { estate: EstateType }) => {
  const [hearted, setHearted] = useState<boolean>(false);
  const handleClick = () => {
    setHearted(!hearted);
  };

  return (
    <div className="p-2 flex flex-col justify-center w-80 ">
      {props.estate.popular ? (
        <div
          className="relative flex flex-row justify-start w-36 h-4 bg-purple-600 top-[213px] 
       rounded-3xl rounded-tl-none"
        >
          <HiSparkles className="h-3" />
          <p className="text-xs text-center text-white">POPULAR</p>
        </div>
      ) : (
        <></>
      )}
      <img
        className="w-full h-[201px] rounded-t-lg mb-4"
        src={props.estate.image}
        alt="Image of the estate"
      />
      <div className="bg-white">
        <div className="flex flex-row justify-between">
          <span className="flex flex-row items-center">
            <p className="text-purple-600 text-2xl font-bold">
              ${props.estate.price}
            </p>
            <p className="text-xs">/month</p>
          </span>
          <div className=" flex justify-center items-center w-8 h-8 border-2 rounded-full">
            {hearted ? (
              <i onClick={handleClick}>
                <FaHeart />
              </i>
            ) : (
              <i onClick={handleClick}>
                <FaRegHeart />
              </i>
            )}
          </div>
        </div>
        <p className="text-black font-bold text-2xl">{props.estate.name}</p>
        <p className="text-gray-500 text-xs mb-3">{props.estate.address}</p>
        <hr className="mb-3" />
        <div className="flex flex-row justify-evenly">
          <Icon icon={FaBed} text={` ${props.estate.beds} bedrooms`} />
          <Icon icon={FaBath} text={` ${props.estate.bathrooms} bathrooms`} />
          <Icon icon={FaSquare} text={props.estate.area} />
        </div>
      </div>
    </div>
  );
};
