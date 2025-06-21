import MainContent from './Components/MainContent';
import Aside from './Components/Aside';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

import Footer from './Components/Footer';

import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header title="Kedvenc Videóim és képeim" />
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center bg-gray-400 w-full">
        <MainContent>
          <Outlet />
        </MainContent>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}
