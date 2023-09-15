import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 37.5665,
  lng: 126.9780  // 예시로 서울의 위도 및 경도를 사용했습니다.
};

const locations = [
  { lat: 37.5665, lng: 126.9780 },
  { lat: 37.5775, lng: 126.9880 },
  // 추가하고 싶은 위치들을 배열에 추가하세요.
];

function MapComponent() {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {locations.map((location, idx) => (
          <Marker key={idx} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
