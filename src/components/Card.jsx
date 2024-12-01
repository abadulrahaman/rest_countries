import React from 'react'

export const Card = (props) => {

    const {propData} = props;

    const {
        flags,
        name,
        population,
        region,
        capital,
    } = propData;


  return (
    <div className='w-[350px] shadow-lg rounded-xl m-12'>
        <img 
            className='w-full h-1/2 rounded-tl-xl rounded-tr-xl'
            src={flags.png}
            alt="Error" 
        />

        <div className='p-6 flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>{name.common}</h1>
            <div className='flex items-center gap-2'>
                <p className='text-xl font-semibold'>Population: </p>
                <p className='text-lg'>{population}</p> 
            </div>

            <div className='flex items-center gap-2'>
                <p className='text-xl font-semibold'>Region: </p>
                <p className='text-lg'>{region}</p>
            </div>

            <div className='flex items-center gap-2'>
                <p className='text-xl font-semibold'>Capital: </p>
                <p className='text-lg'>{capital}</p>
            </div>
        </div>

    </div>
  )
}
