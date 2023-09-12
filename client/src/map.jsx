import { geoJSON } from "leaflet";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  GeoJSON,
  Polygon,
} from "react-leaflet";

const Map = (props) => {
  const layers = props.layers;
  const [selectedFeature, setSelectedFeature] = useState([]);
  useEffect(() => {
    console.log(selectedFeature);
  }, [selectedFeature]);

  function duplicate_path() {}

  return (
    <MapContainer
      center={[46.603354, 1.888334]}
      zoom={5}
      scrollWheelZoom={true}
      id="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {layers.map((layer, index) => {
        var feats = layer.features;
        return (
          <GeoJSON
            key={index}
            data={feats}
            onEachFeature={(feature, path) => {
              path.addEventListener("click", () => {
                setSelectedFeature((prevSelectedFeatures) => [
                  ...prevSelectedFeatures,
                  {
                    type: "Feature",
                    geometry: feature.geometry,
                    properties: feature.properties,
                    bbox: feature.bbox,
                  },
                ]);
              });
            }}
          ></GeoJSON>
        );
      })}
      {selectedFeature &&
        selectedFeature.map((shape) => {
          <GeoJSON
            data={shape}
            pathOptions={{ fillColor: "red", "z-index": 9999 }}
          />;
        })}
    </MapContainer>
  );
};

export default Map;
