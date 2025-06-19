import { useState } from 'react';
import Main from './components/Main';
import Aside from './components/Aside';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Account from './components/Account';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title="Kedvenc Videoim és képeim" />
      <Navbar />
      <div className="flex justify-center bg-gray-400">
        <Main>
          <Home />
          <Account />
        </Main>
        <Aside>aside content</Aside>
      </div>
      <Footer />
    </div>
  );
}

export default App;
