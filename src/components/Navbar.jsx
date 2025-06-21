import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-600 flex flex-col md:flex-row justify-start items-center w-full text-sm text-black">
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center w-full my-4 ">
        <li className="bg-gray-200 mx-2 px-5 py-3 lg:py-2 ">
          <a href="#">Kezdőoldal</a>
        </li>
        <li className="bg-gray-200 mx-2 px-5 py-3 lg:py-2">
          <a href="#">Képek</a>
        </li>
        <li className="bg-gray-200 mx-2 px-5 py-3 lg:py-2">
          <a href="#">Videók</a>
        </li>
        <li className="bg-gray-200 mx-2 px-5 py-3 lg:py-2">
          <a href="#">Account</a>
        </li>
      </ul>
    </nav>
  );
}
