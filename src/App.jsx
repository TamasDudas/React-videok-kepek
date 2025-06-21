import { useState } from 'react';
import Main from './Components/Main';
import Aside from './Components/Aside';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Account from './Pages/Account';
import Card from './Components/Card';

function App() {
  return (
    <div>
      <Header title="Kedvenc Videoim és képeim" />
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center bg-gray-400 w-full">
        <Main>
          <Home />
          <Account />
          <Card />
        </Main>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
