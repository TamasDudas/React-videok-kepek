import React from 'react';
import Pictures from './gallery/Pictures';
import Videos from './gallery/Videos';

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3>Képek</h3>
        <Pictures showLimited={true} />
      </div>
      <div>
        <h3>Videok</h3>
        <Videos showLimited={true} />
      </div>
    </div>
  );
}
