import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image'; // Import Image from Next.js

interface MapLinkProps {
  latitude: number;
  longitude: number;
}

const MapLink: React.FC<MapLinkProps> = ({ latitude, longitude }) => {
  const [hovered, setHovered] = useState(false);

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`);
  };

  return (
    <div
      onClick={openGoogleMaps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer', position: 'relative' }}
    >
          <Image
            src="https://res.cloudinary.com/djqjmfl2s/image/upload/v1720971805/Screenshot_2024-07-14_at_8.56.41_PM_si6wsb.png"
            alt="map image"
            width={1920}
            height={500}
            className="object-cover h-auto md:h-[500px]"
          />
          {hovered && (
            <span
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md"
              style={{ zIndex: 10 }}
            >
              Click here to get directions in Google Map
            </span>
          )}
    </div>
  );
};

export default MapLink;
