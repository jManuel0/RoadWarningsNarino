import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({ coordinates }) {
  let coords;
  try {
    coords = JSON.parse(coordinates);
  } catch {
    coords = [1.21, -77.28]; // fallback
  }

  return (
    <MapContainer
      center={coords}
      zoom={13}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords}>
        <Popup>Alerta en {coords.join(", ")}</Popup>
      </Marker>
    </MapContainer>
  );
}
