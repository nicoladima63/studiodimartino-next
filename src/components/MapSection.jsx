"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
);

export default function MapSection() {
  return (
    <div className="mt-12">
      <p id="map-desc" className="sr-only">
        Mappa di localizzazione dello Studio Dentistico Di Martino — Via Michelangelo Buonarroti 15, 51031 Agliana (PT).
        L&apos;indirizzo completo è disponibile nella sezione contatti qui sopra.
      </p>
      <div className="h-96 w-full rounded-lg overflow-hidden" role="img" aria-label="Mappa interattiva dello studio" aria-describedby="map-desc">
      <MapContainer
        center={[43.9015278, 11.0136389]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[43.9015278, 11.0136389]}>
          <Popup>
            Studio Dentistico Dr. Nicola Di Martino
            <br />
            Via Michelangelo Buonarroti, 15
            <br />
            51031 - Agliana (PT)
          </Popup>
        </Marker>
      </MapContainer>
      </div>
    </div>
  );
}
