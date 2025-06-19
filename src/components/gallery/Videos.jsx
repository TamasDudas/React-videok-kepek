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

  return (
    <div className="flex flex-wrap justify-center mx-auto">
      {displayVideos.map((video) => (
        <div key={video.id} className="w-full sm:w-1/2 md:w-1/3 p-2">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="text-center mt-2 text-sm text-gray-600">
            {video.title}
          </p>
        </div>
      ))}
    </div>
  );
}
