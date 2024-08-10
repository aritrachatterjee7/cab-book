import React, { useContext, useState, useEffect } from 'react';
import { GoogleMap, MarkerF, OverlayViewF } from '@react-google-maps/api';
import { DestinationContext } from '@/context/DestinationContext';
import { SourceContext } from '@/context/SourceContext';

const GoogleMapSection = () => {
  const containerStyle = {
    width: '100%',
    height: window.innerWidth * 0.5,
  };

  const { source } = useContext(SourceContext);
  const { destination } = useContext(DestinationContext);

  const [center, setCenter] = useState({
    lat: 28.59,
    lng: 78.96,
  });
  const [zoom, setZoom] = useState(5); // Set a lower zoom level for a zoomed-out view
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (source && source.lat && source.lng && map) {
      map.panTo({
        lat: source.lat,
        lng: source.lng,
      });
      setCenter({
        lat: source.lat,
        lng: source.lng,
      });
      setZoom(15); // Optionally zoom in when source is set
    }
  }, [source, map]);

  useEffect(() => {
    if (destination && destination.lat && destination.lng && map) {
      map.panTo({
        lat: destination.lat,
        lng: destination.lng,
      });
      setCenter({
        lat: destination.lat,
        lng: destination.lng,
      });
      setZoom(15); // Optionally zoom in when destination is set
    }
  }, [destination, map]);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: '8284d3ef899c7f80' }}
    >
      {/* Source Marker and Overlay */}
      {source && source.lat && source.lng && (
        <MarkerF position={{ lat: source.lat, lng: source.lng }}>
          <OverlayViewF
            position={{ lat: source.lat, lng: source.lng }}
            mapPaneName={OverlayViewF.OVERLAY_MOUSE_TARGET}
          >
            <div className="p-2 bg-white rounded-lg shadow-lg border border-gray-200">
              <p className="text-black text-[16px] font-semibold">
                {source.label}
              </p>
            </div>
          </OverlayViewF>
        </MarkerF>
      )}

      {/* Destination Marker and Overlay */}
      {destination && destination.lat && destination.lng && (
        <MarkerF position={{ lat: destination.lat, lng: destination.lng }}>
          <OverlayViewF
            position={{ lat: destination.lat, lng: destination.lng }}
            mapPaneName={OverlayViewF.OVERLAY_MOUSE_TARGET}
          >
            <div className="p-2 bg-blue-500 rounded-lg shadow-lg border border-blue-700">
              <p className="text-white text-[16px] font-semibold">
                {destination.label}
              </p>
            </div>
          </OverlayViewF>
        </MarkerF>
      )}

      <></>
    </GoogleMap>
  );
};

export default GoogleMapSection;
