import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Card = (props) => {
  const navigate = useNavigate();
  const { propData, darkMode } = props;

  const { flags, name, population, region, capital } = propData;

  const handleClick = () => {
    navigate(`/details/${name.common}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full sm:w-[350px] lg:w-[300px] xl:w-[350px] shadow-lg rounded-xl m-4 ${
        darkMode ? 'bg-[#2B3945] text-white' : 'bg-white'
      } cursor-pointer transition-transform transform hover:scale-105`}
    >
      <img
        className="w-full h-48 object-cover rounded-tl-xl rounded-tr-xl"
        src={flags.png}
        alt={`${name.common} flag`}
      />

      <div className="p-4 sm:p-6 flex flex-col gap-2">
        <h1 className="text-xl sm:text-2xl font-bold truncate">{name.common}</h1>
        <div className="flex items-center gap-2">
          <p className="text-lg sm:text-xl font-semibold">Population: </p>
          <p className="text-sm sm:text-lg">{population.toLocaleString()}</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-lg sm:text-xl font-semibold">Region: </p>
          <p className="text-sm sm:text-lg">{region}</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-lg sm:text-xl font-semibold">Capital: </p>
          <p className="text-sm sm:text-lg">{capital}</p>
        </div>
      </div>
    </div>
  );
};
