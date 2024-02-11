import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const apiKey = "AIzaSyDRaoZWvJ5aeVIKBn60pDpN5Fx3eMk6FWM";
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
export default function Map(){
  return (
    <div style={{width: "400px", height: "300px"}}>
      <GoogleMap key={apiKey}
        zoom={defaultProps.zoom}
        center={defaultProps.center}>
          <Marker position={defaultProps.center}/>
      </GoogleMap>
    </div>
  );
}