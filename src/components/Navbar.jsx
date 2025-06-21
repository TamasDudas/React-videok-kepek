import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const activeClass = ({ isActive }) =>
    isActive ? 'font-bold text-gray-900' : '';

  return (
    <nav className="bg-gray-600 flex flex-col md:flex-row justify-start items-center w-full text-sm text-black">
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center w-full my-4 ">
        <li className="bg-gray-200 mx-2 px-5 py-3 lg:py-2 ">
          <NavLink to="/" className={activeClass}>
            Kezdőoldal
          </NavLink>
        </li>
        <li className="bg-gray-200 mx-2 px-5 py-3 lg:py-2">
          <NavLink to="/pictures" className={activeClass}>
            Képek
          </NavLink>
        </li>
        <li className="bg-gray-200 mx-2 px-5 py-3 lg:py-2">
          <NavLink to="/videos" className={activeClass}>
            Videók
          </NavLink>
        </li>
        <li className="bg-gray-200 mx-2 px-5 py-3 lg:py-2">
          <NavLink to="/account" className={activeClass}>
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
