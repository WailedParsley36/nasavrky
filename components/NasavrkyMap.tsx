import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { MapScroller } from "./ParcelMap";

export default function NasavrkyMapBroken() {
  return (
    <MapContainer
      center={[49.844399740570665, 15.802567982690675]}
      zoom={16}
      className="w-full h-full"
    >
      <MapScroller />
      <Marker position={[49.84445841564695, 15.802217735898903]} />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
        subdomains="abcd"
        maxZoom={20}
      />
    </MapContainer>
  );
}
