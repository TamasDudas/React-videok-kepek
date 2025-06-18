import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Bruno from './assets/bruno.jpg';
import Collie from './assets/collie.jpg';
import Halo from './assets/jozsef_halo_2.jpg';
import Nappli from './assets/nappali.jpg';
import NemesHalo4 from './assets/nemes_halo_4.jpg';
import Nordwood from './assets/nordwood.jpg';
import Sarosi from './assets/sarosi_halo.jpg';
import Tisza from './assets/tisza_utca_1.jpg';
import Tisza2 from './assets/tisza_utca_2.jpg';

function App() {
  const [count, setCount] = useState(0);

  const pictures = [
    {
      id: 1,
      url: Bruno,
      title: 'Kép 1',
    },
    {
      id: 2,
      url: Collie,
      title: 'Kép 2',
    },
    {
      id: 3,
      url: Halo,
      title: 'Kép 3',
    },
    {
      id: 4,
      url: Nappli,
      title: 'Kép 4',
    },
    {
      id: 5,
      url: NemesHalo4,
      title: 'Kép 5',
    },
    {
      id: 6,
      url: Nordwood,
      title: 'Kép 6',
    },
    {
      id: 7,
      url: Sarosi,
      title: 'Kép 7',
    },
    {
      id: 8,
      url: Tisza,
      title: 'Kép 8',
    },
    {
      id: 9,
      url: Tisza2,
      title: 'Kép 9',
    },
  ];

  return (
    <div>
      <Header title="Kedvenc Videoim és képeim" />
      <Navbar />
    </div>
  );
}

export default App;
