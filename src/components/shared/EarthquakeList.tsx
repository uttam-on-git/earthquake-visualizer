import type { Earthquake } from '@/types';
import { EarthquakeListItem } from './EarthquakeListItem';

interface EarthquakeListProps {
  quakes: Earthquake[];
  isLoading: boolean;
}

// This component is the container for our list. It demonstrates a key React
// principle: conditional rendering. Based on the `isLoading` prop, it either
// maps over the real data to render items or maps over an empty array
// to render a list of skeleton loaders.
export function EarthquakeList({ quakes, isLoading }: EarthquakeListProps) {
  return (
    <div className="w-full h-1/2 md:h-full md:w-1/3 lg:w-1/4 border-l flex flex-col">
      <div className="p-4 border-b sticky top-0 bg-background z-10">
        <h2 className="text-lg font-semibold tracking-tight">
          Recent Earthquakes
        </h2>
      </div>
      <div className="overflow-y-auto flex-1">
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => (
              <EarthquakeListItem key={i} isLoading={true} />
            ))
          : quakes.map((quake) => (
              <EarthquakeListItem
                key={quake.id}
                quake={quake}
                isLoading={false}
              />
            ))}
      </div>
    </div>
  );
}
