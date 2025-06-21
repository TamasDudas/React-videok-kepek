import React from 'react';

export default function Header({ title }) {
  return (
    <div className="bg-gray-900 flex justify-center items-center h-40 w-full text-4xl font-bold text-white">
      {title}
    </div>
  );
}
