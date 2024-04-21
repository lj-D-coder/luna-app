/// <reference types="@types/googlemaps" />

// GoogleMapComponent.tsx
import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '400px',
};

const center = {
  lat: 24.80805000,
  lng: 93.94420000,
};

interface GoogleMapComponentProps {
  onClose: () => void;
  onSetLocation: (location: { lat: number; lng: number }) => void;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_MAP_API_KEY}`,
  });

  const [map, setMap] = useState<google.maps.Map<Element> | null>(null);
  const [selectedLocation, setSelectedLocation] = useState(center);

  const onLoad = useCallback((map: google.maps.Map<Element>) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="map-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(e) => setSelectedLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
      >
        <Marker position={selectedLocation} />
      </GoogleMap>
      <button className="close-button absolute top-0 right-0 bg-white p-1" onClick={props.onClose}>X</button>
      <button className="set-location-button absolute bottom-0 right-0 bg-white p-1" onClick={() => props.onSetLocation(selectedLocation)}>Set Location</button>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapComponent);



