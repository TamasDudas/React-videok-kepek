import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-600 flex justify-start items-center h-10 w-full text-sm text-black pl-1 ">
      <ul className="flex space-x-4">
        <li className="bg-gray-200 px-5 py-1">
          <a href="#">Kezdőoldal</a>
        </li>
        <li className="bg-gray-200 px-5 py-1">
          <a href="#">Képek</a>
        </li>
        <li className="bg-gray-200 px-5 py-1">
          <a href="#">Videók</a>
        </li>
        <li className="bg-gray-200 px-5 py-1">
          <a href="#">Account</a>
        </li>
      </ul>
    </nav>
  );
}
