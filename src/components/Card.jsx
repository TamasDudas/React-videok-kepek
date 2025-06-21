import React from 'react';

export default function Card({ items = [], renderItem }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden h-35 "
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
