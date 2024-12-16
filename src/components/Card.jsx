import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Card = (props) => {
  const navigate = useNavigate()
  const { propData, darkMode } = props

  const { flags, name, population, region, capital } = propData

  const handleClick = () => {
    navigate(`/details/${name.common}`)
  }

  return (
    <div
      onClick={handleClick}
      className={`w-[350px] shadow-lg rounded-xl m-12 ${
        props.darkMode ? 'bg-[#2B3945] text-white' : 'bg-white'
      }`}
    >
      <img
        className="w-full h-1/2 rounded-tl-xl rounded-tr-xl"
        src={flags.png}
        alt="Error"
      />

      <div className="p-6 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{name.common}</h1>
        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold">Population: </p>
          <p className="text-lg">{population}</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold">Region: </p>
          <p className="text-lg">{region}</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold">Capital: </p>
          <p className="text-lg">{capital}</p>
        </div>
      </div>
    </div>
  )
}
