import React from 'react';
import Pictures from './Pictures';
import Videos from './Videos';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 my-12">
      <div>
        <h3 className="mb-4">Képek</h3>
        <Pictures showLimited={true} />
      </div>
      <div>
        <h3 className="mb-4">Videok</h3>
        <Videos showLimited={true} />
      </div>
    </div>
  );
}
