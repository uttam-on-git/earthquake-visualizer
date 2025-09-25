import {
  MapContainer as LeafletMapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Earthquake } from '@/types';
import { MapController } from './MapController';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
});

// A custom, pulsing icon for the selected marker for better visual feedback.
const selectedIcon = new L.DivIcon({
  className: 'marker-selected',
  html: `<div class="relative flex h-6 w-6 items-center justify-center"><div class="absolute h-full w-full animate-ping rounded-full bg-primary/75"></div><div class="relative h-4 w-4 rounded-full border-2 border-white bg-primary"></div></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

interface MapContainerProps {
  quakes: Earthquake[];
  selectedQuakeId: string | null;
}

export function MapContainer({ quakes, selectedQuakeId }: MapContainerProps) {
  return (
    <div className="w-full h-full bg-muted">
      <LeafletMapContainer
        center={[20, 0]}
        zoom={3}
        scrollWheelZoom={true}
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'hsl(var(--muted))',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {quakes.map((quake) => {
          const isSelected = quake.id === selectedQuakeId;
          return (
            <Marker
              key={quake.id}
              position={[quake.lat, quake.lon]}
              icon={isSelected ? selectedIcon : new L.Icon.Default()}
              // This custom option is used by MapController to find the marker.
              customId={quake.id}
            >
              <Popup>
                <div className="font-sans">
                  <p className="font-bold">Magnitude: {quake.mag}</p>
                  <p>{quake.place}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
        <MapController selectedQuakeId={selectedQuakeId} quakes={quakes} />
      </LeafletMapContainer>
    </div>
  );
}
