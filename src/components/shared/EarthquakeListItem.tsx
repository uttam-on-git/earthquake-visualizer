import type { Earthquake } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';

// This component is designed to render in two states: either displaying the
// actual earthquake data or a skeleton placeholder. This is a common and
// effective pattern for handling loading states within a list.
interface EarthquakeListItemProps {
  quake?: Earthquake;
  isLoading: boolean;
}

export function EarthquakeListItem({
  quake,
  isLoading,
}: EarthquakeListItemProps) {
  if (isLoading || !quake) {
    return (
      <div className="p-4 border-b">
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    );
  }

  const magnitudeColor =
    quake.mag > 5
      ? 'text-destructive'
      : quake.mag > 3
        ? 'text-yellow-500'
        : 'text-green-500';

  return (
    <div className="p-4 border-b hover:bg-muted/50 cursor-pointer">
      <h3 className={`font-bold text-lg ${magnitudeColor}`}>
        Magnitude: {quake.mag.toFixed(1)}
      </h3>
      <p className="text-muted-foreground text-sm">{quake.place}</p>
      <p className="text-muted-foreground text-xs pt-1">
        {new Date(quake.time).toLocaleString()}
      </p>
    </div>
  );
}
