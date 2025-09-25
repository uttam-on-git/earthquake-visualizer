import type { Earthquake } from '@/types';
import { EarthquakeListItem } from './EarthquakeListItem';

interface EarthquakeListProps {
  quakes: Earthquake[];
  isLoading: boolean;
  selectedQuakeId: string | null;
  onQuakeSelect: (id: string | null) => void;
}

export function EarthquakeList({
  quakes,
  isLoading,
  selectedQuakeId,
  onQuakeSelect,
}: EarthquakeListProps) {
  return (
    <div className="w-full h-full flex flex-col bg-card">
      <div className="p-4 border-b">
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
                isSelected={quake.id === selectedQuakeId}
                onSelect={() => onQuakeSelect(quake.id)}
              />
            ))}
      </div>
    </div>
  );
}
