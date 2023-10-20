import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div className="">
    <span className="py-[2px] px-[8px]  rounded-full bg-red-700">
    </span>
    <span className="bg-white py-[1px] px-[4px] rounded-full"></span>
    <p>{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ keys: "AIzaSyCZZjK0AIPnzZ4Z--YW0S2I4NRHA3qEcmg" }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      <AnyReactComponent
        lat={location.lat}
        lng={location.lng}
        text={"Xprime hardwares"}
      />
    </GoogleMapReact>
  );
};

export default Map;

// AIzaSyCZZjK0AIPnzZ4Z--YW0S2I4NRHA3qEcmg
