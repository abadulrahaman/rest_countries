import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { Card } from './Card'
import { IoSearchOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { IoIosArrowBack } from 'react-icons/io';

export const Home = () => {

    const [countriesData, setCountriesData] = useState([]);  // This is all countries data
    const [search, setSearch] = useState('');  // This is used for search input to search countries
    const [searchCountry, setSearchCountry] = useState(null); // This is used for filtered countries
    const [region, setRegion] = useState(''); // This useState handles selected region 
    const [filterRegion, setFilterRegion] = useState(null); // This useState filters countries by region
    const [dropdown, setDropdown] = useState(false); // This is for dropdown features

    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']; // Regions

    // Fetching all countries from API
    const getCountriesDetails = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountriesData(jsonData);
    };

    useEffect(() => {
        getCountriesDetails();
    }, []);

    // Handle search by country name when the user enters any country name
    const handleSearch = async (e) => {
        e.preventDefault();
        const result = await fetch(`https://restcountries.com/v3.1/name/${search}`);
        const jsonData_1 = await result.json();
        setSearchCountry(jsonData_1);
    }

    // Clear input box and show all countries again
    const clearInput = () => {
        setSearch(''); 
        setSearchCountry(null); // Reset to show all countries data
    }

    // Function to handle region filtering
    const handleRegionFilter = async (selectedRegion) => {
        if (selectedRegion === 'All') {
            setRegion('');
            setFilterRegion(null);
            setSearchCountry(null); 
            // Shows all countries 
        } else {
            setRegion(selectedRegion);
            const result = await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`);
            const jsonData = await result.json();
            setFilterRegion(jsonData);
            setSearchCountry(null); // If region is applied, clear search results
        }
    }

    // Get the data to be displayed based on filters
    const getDisplayedData = () => {
        if (searchCountry) {
            return searchCountry;
        } else if (filterRegion) {
            return filterRegion;
        } else {
            return countriesData;
        }
    }

    return (
        <div>
            <div className='flex items-center justify-between my-4 mx-8'>
                <div className='m-8 flex items-center gap-4 shadow-lg p-4 w-fit rounded-lg text-[#A0A1A2] text-xl'>
                    <IoSearchOutline className='cursor-pointer' onClick={handleSearch}/>
                    <form onSubmit={handleSearch}>
                        <input 
                            className='outline-none'
                            type="text" 
                            placeholder='Search countries name'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                    <RxCross2 className='cursor-pointer' onClick={clearInput}/>  {/* Clear search data */}
                </div>

                <div 
                    className='flex items-center gap-6 shadow-lg p-4 rounded-lg m-8 text-lg relative cursor-pointer'
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                >
                    <p>{region || 'Filter by Region'}</p>
                    <IoIosArrowBack 
                        className={`transform transition-transform ${dropdown ? 'rotate-90' : ''}`}
                    />
                    {dropdown && (
                        <div className='absolute top-12 left-0 bg-white shadow-lg rounded-lg z-10]'>
                            {['All', ...regions].map((regionName) => (
                                <p
                                    key={regionName}
                                    className='p-2 hover:bg-gray-200 cursor-pointer'
                                    onClick={() => handleRegionFilter(regionName)}
                                >
                                    {regionName === 'All' ? 'Show All' : regionName}
                                </p>
                            ))}
                        </div>
                    )}
                </div>

            </div>

            {/* This checks if searchCountry exists, then show matching countries, else show filtered by region or all countries */}
            <div className='grid grid-cols-4'>
                {getDisplayedData().length > 0 ? (
                    getDisplayedData().map((country, index) => (
                        <Card key={index} propData={country} />
                    ))
                ) : (
                    <div className="text-3xl font-semibold text-red-500 text-center">
                        No countries found
                    </div>
                )}
            </div>
        </div>
    )
}
