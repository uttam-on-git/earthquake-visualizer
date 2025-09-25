import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import type { Earthquake } from '@/types';

interface MapControllerProps {
  selectedQuakeId: string | null;
  quakes: Earthquake[];
}

// separates map control logic from the map rendering component.
export function MapController({ selectedQuakeId, quakes }: MapControllerProps) {
  const map = useMap();

  useEffect(() => {
    if (!selectedQuakeId) return;

    const selectedQuake = quakes.find((q) => q.id === selectedQuakeId);
    if (selectedQuake) {
      map.flyTo([selectedQuake.lat, selectedQuake.lon], 7);

      // find the corresponding marker on the map and open its popup.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map.eachLayer((layer: any) => {
        if (layer.options && layer.options.customId === selectedQuakeId) {
          layer.openPopup();
        }
      });
    }
  }, [selectedQuakeId, quakes, map]);

  return null;
}
