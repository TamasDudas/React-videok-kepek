import React from 'react';
import Card from '../Components/Card';

const videos = [
  {
    id: 1,
    url: 'https://www.youtube.com/embed/dCLhUialKPQ?start=6488', // Embed URL
    title: 'React tutorial',
  },
  {
    id: 2,
    url: 'https://www.youtube.com/embed/SqTdHCTWqks', // Embed URL
    title: 'Laravel',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/embed/ny4-hGENWVk?si=MNwVfpMscHmnIzS8',
    title: 'PHP',
  },
  {
    id: 4,
    url: 'https://www.youtube.com/embed/V9i3cGD-mts?si=P49RiXQsXPXANW38',
    title: 'React UseState',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/embed/-4XpG5_Lj_o?si=bfsvvk3XQz0O2rUz',
    title: 'React UseEffect',
  },
  {
    id: 6,
    url: 'https://www.youtube.com/embed/n7xQVRpYHYY?si=cllwNx6Gig4owZC',
    title: 'React UseContext',
  },
  {
    id: 7,
    url: 'https://www.youtube.com/embed/LWiMVumNxZ8?si=3HfDhcPLgoc2wDPm',
    title: 'React Redux Toolkit',
  },
  {
    id: 8,
    url: 'https://www.youtube.com/embed/qJq9ZMB2Was?si=iCCn_oqGxTMtXtPB',
    title: 'Laravel React',
  },
  {
    id: 9,
    url: 'https://www.youtube.com/embed/VrQRa-afCAk?si=VJTzTImwk-7bEBlC',
    title: 'Laravel React Inertia',
  },
];

export default function Videos({ showLimited = false }) {
  const displayVideos = showLimited ? videos.slice(0, 3) : videos;

  const renderVideo = (video) => (
    <iframe
      className="object-cover w-full h-full"
      src={video.url}
      title={video.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );

  return (
    <div>
      {!showLimited && (
        <h3 className="text-2xl font-semibold  my-3 ">Videók</h3>
      )}
      <Card items={displayVideos} renderItem={renderVideo} />
    </div>
  );
}
