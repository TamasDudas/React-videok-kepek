import React from 'react';

export default function Header({ title }) {
  return (
    <div className="bg-gray-500 flex justify-center items-center h-20 w-full text-2xl font-bold text-white">
      {title}
    </div>
  );
}
