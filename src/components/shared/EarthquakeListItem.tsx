import type { Earthquake } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface EarthquakeListItemProps {
  quake?: Earthquake;
  isLoading: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
}

export function EarthquakeListItem({
  quake,
  isLoading,
  isSelected,
  onSelect,
}: EarthquakeListItemProps) {
  if (isLoading || !quake) {
    return (
      <div className="p-4 border-b">
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    );
  }

  // Check if magnitude is a valid number
  const hasMagnitude = typeof quake.mag === 'number';

  const magnitudeColor =
    hasMagnitude && quake.mag > 5
      ? 'text-destructive'
      : hasMagnitude && quake.mag > 3
        ? 'text-yellow-500'
        : 'text-green-500';

  return (
    <div
      onClick={onSelect}
      className={cn(
        'p-4 border-b hover:bg-muted/50 cursor-pointer',
        isSelected && 'bg-muted'
      )}
    >
      <h3 className={`font-bold text-lg ${magnitudeColor}`}>
        {/* Safely render the magnitude */}
        Magnitude: {hasMagnitude ? quake.mag.toFixed(1) : 'N/A'}
      </h3>
      <p className="text-muted-foreground text-sm">{quake.place}</p>
      <p className="text-muted-foreground text-xs pt-1">
        {new Date(quake.time).toLocaleString()}
      </p>
    </div>
  );
}
