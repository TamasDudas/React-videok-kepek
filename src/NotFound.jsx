import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col bg-gray-400 h-screen">
      <h2 className="text-4xl font-bold text-center my-10">
        404 - Nem található az oldal
      </h2>
      <Link to="/" className="text-center">
        Vissza a főoldalra
      </Link>
    </div>
  );
}
