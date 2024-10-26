import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent: React.FC = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  // Set default coordinates
  const defaultCenter = {
    lat: 40.712776, // Default latitude
    lng: -74.005974, // Default longitude
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
