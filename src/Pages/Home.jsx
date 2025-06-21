import React from 'react';
import { Link } from 'react-router-dom';
import Pictures from './Pictures';
import Videos from './Videos';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 my-3">
      <div>
        <h3 className="text-2xl font-semibold  my-3">
          <Link to="/pictures" className="hover:text-gray-700">
            Képek
          </Link>
        </h3>
        <Pictures showLimited={true} />
      </div>
      <div>
        <h3 className="text-2xl font-semibold  my-3">
          <Link to="/videos" className="hover:text-gray-700">
            Videók
          </Link>
        </h3>
        <Videos showLimited={true} />
      </div>
    </div>
  );
}
