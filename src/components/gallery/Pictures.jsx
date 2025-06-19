import React from 'react';
import Bruno from '../../assets/bruno.jpg';
import Collie from '../../assets/collie.jpg';
import Halo from '../../assets/jozsef_halo_2.jpg';
import Nappli from '../../assets/nappali.jpg';
import NemesHalo4 from '../../assets/nemes_halo_4.jpg';
import Nordwood from '../../assets/nordwood.jpg';
import Sarosi from '../../assets/sarosi_halo.jpg';
import Tisza from '../../assets/tisza_utca_1.jpg';
import Tisza2 from '../../assets/tisza_utca_2.jpg';

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

export default function Pictures({ showLimited = false }) {
  const displayPictures = showLimited ? pictures.slice(0, 3) : pictures;

  return (
    <div className="flex flex-wrap justify-center mx-auto">
      {displayPictures.map((picture) => (
        <div key={picture.id} className="w-full sm:w-1/2 md:w-1/3  p-2">
          <img
            className="w-full h-30 object-cover"
            src={picture.url}
            alt={picture.title}
          />
        </div>
      ))}
    </div>
  );
}
