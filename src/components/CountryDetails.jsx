import React, { useEffect, useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';

const CountryDetails = (props) => {
  const { id } = useParams(); // this gets the country name
  const [countryData, setCountryData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${encodeURIComponent(id)}`
      );
      const details = await response.json();
      setCountryData(details[0]);
    };

    fetchDetails();
  }, [id]);

  if (!countryData) {
    return (
      <p className="text-3xl font-semibold flex items-center justify-center p-4 m-20">
        Page is loading...... please wait
      </p>
    );
  }

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = countryData;

  console.log(props); 

  return (
    <div className={`${props.darkMode ? 'bg-[#0c0f11] text-white' : 'bg-white text-black'} min-h-screen`}>
      {/* Back Button */}
      <div
        onClick={() => navigate(-1)}
        className={`flex items-center gap-2 py-4 px-10 shadow-lg rounded-xl my-14 mx-6 sm:mx-20 cursor-pointer w-fit ${props.darkMode ? 'bg-[#2B3945] text-white' : 'bg-white text-black'}`}
      >
        <FaArrowLeftLong />
        <p>Back</p>
      </div>

      {/* Country Details */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-20 px-6">
        {/* Flag Image */}
        <img
          className="shadow-md w-full lg:w-[850px] lg:h-[550px] rounded-xl"
          src={flags?.png}
          alt="Flag"
        />

        {/* Country Info */}
        <div className="flex flex-col gap-6 lg:w-2/3">
          {/* Country Name */}
          <h1 className="text-3xl sm:text-4xl font-bold capitalize">{name?.common}</h1>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-between">
            {/* Left Column - Basic Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <p className="text-lg sm:text-xl font-semibold">Native Name:</p>
                <p className="text-base sm:text-lg">
                  {name?.nativeName
                    ? Object.values(name?.nativeName)[0]?.common
                    : 'N/A'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg sm:text-xl font-semibold">Population:</p>
                <p className="text-base sm:text-lg">{population.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg sm:text-xl font-semibold">Region:</p>
                <p className="text-base sm:text-lg">{region}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg sm:text-xl font-semibold">Sub Region:</p>
                <p className="text-base sm:text-lg">{subregion}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg sm:text-xl font-semibold">Capital:</p>
                <p className="text-base sm:text-lg">{capital?.[0]}</p>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <p className="text-lg sm:text-xl font-semibold">Top Level Domain:</p>
                <p className="text-base sm:text-lg">{tld?.join(', ')}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg sm:text-xl font-semibold">Currencies:</p>
                <p className="text-base sm:text-lg">
                  {currencies ? Object.values(currencies)[0]?.name : 'N/A'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg sm:text-xl font-semibold">Languages:</p>
                <p className="text-base sm:text-lg">
                  {languages ? Object.values(languages).join(', ') : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Border Countries */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <h1 className="text-xl font-semibold">Border Countries:</h1>
            <div className="flex items-center gap-4">
              {countryData?.borders?.length > 0 ? (
                countryData.borders.map((border, index) => (
                  <p
                    key={index}
                    className="py-2 px-4 shadow-lg rounded-lg cursor-pointer"
                  >
                    {border}
                  </p>
                ))
              ) : (
                <p className="py-2 px-4 shadow-lg rounded-lg">None</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
