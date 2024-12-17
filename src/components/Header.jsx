import React from 'react';
import { IoMoonSharp } from 'react-icons/io5';
import { MdLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <div
      className={`flex justify-between items-center py-6 px-10 text-2xl shadow-lg ${
        props.darkMode ? 'bg-[#0c0f11] text-white' : 'bg-white text-black'
      }`}
    >
      <Link to="/">
        <div>Countries</div>
      </Link>
      <div
        onClick={props.setDarkMode}
        className="flex items-center gap-4 cursor-pointer"
      >
        {props.darkMode ? <MdLightMode /> : <IoMoonSharp />}
        {props.darkMode ? (
          <p className="text-xl">Light Mode</p>
        ) : (
          <p className="text-xl">Dark Mode</p>
        )}
      </div>
    </div>
  );
};
