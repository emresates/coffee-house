import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function GoogleMaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
    const center = { lat: 44, lng: -80 }
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="googlemap"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
