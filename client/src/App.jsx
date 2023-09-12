import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import "./css/Menu.css";
import Menu from "./Menu";
import Map from "./map";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";

function App() {
  const [count, setCount] = useState(0);
  const [layers, setLayer] = useState([]);

  return (
    <>
      <Menu layers={layers} setLayer={setLayer} />
      <Map layers={layers} />
    </>
  );
}

export default App;
