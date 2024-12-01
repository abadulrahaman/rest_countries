import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { Card } from './Card'
import { data } from 'autoprefixer';
import { IoSearchOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { IoIosArrowBack } from 'react-icons/io';

export const Home = () => {

    const [countriesData, setCountriesData] = useState([]);  // this is all countries data
    const[search, setSearch] = useState('');  // this is used for search input to search countries
    const [searchCountry, setSearchCountry] = useState(null); // this is used for filter countries

    const getCountriesDetails = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountriesData(jsonData);
        // console.log(jsonData); // prints the API response in console
    };

    useEffect(() => {
        getCountriesDetails();
    },[]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const result = await fetch(`https://restcountries.com/v3.1/name/${search}`)
        const jsonData_1 = await result.json()
        setSearchCountry(jsonData_1)
        console.log(jsonData_1);  // prints the only one search country in console
    }

    // this function for cross icon when user click on it all data clear in input box and shows all countries again
    const clearinput = () => {
        setSearch('') // this is clear input box
        setSearchCountry(null) // this is shows all countries data
    }

    // this function for search when user click on it
    const searchbutton = (e) => {
        handleSearch(e);  // call the handleSearch funtion for search country
    }

    // console.log(search);

  return (
    <div>
        <Header/>
        <div className='flex items-center justify-between my-4 mx-8'>
            <div className='m-8 flex items-center gap-4 shadow-lg p-4 w-fit rounded-lg text-[#A0A1A2] text-xl'>
                <IoSearchOutline className='cursor-pointer' onClick={searchbutton}/>
                <form onSubmit={handleSearch}>
                    <input 
                        className='outline-none'
                        type="text" 
                        placeholder='Search countries name'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <RxCross2 className='cursor-pointer' onClick={clearinput}/>  {/* clear all search data */}
            </div>

            <div className='flex items-center gap-6 shadow-lg p-4 rounded-lg m-8 text-lg'>
                <p>Filter by Region</p>
                <IoIosArrowBack />
            </div>

        </div>

        {/*this check if search then show matching countries else show all countries by default when page loads */}
        <div className='grid grid-cols-4 '>
            {searchCountry ? (
                searchCountry.length > 0 ? (
                    searchCountry.map((country, index) => (
                        <Card key={index} propData={country} />
                    ))
                ) : 
                (
                    <div className="text-3xl font-semibold text-red-500 text-center">
                        Countries not found
                    </div>
                    )
            ) : 
            (
                countriesData.map((country, index) => (
                    <Card key={index} propData={country} />
                ))
            )}

        </div>
    </div>
  )
}
