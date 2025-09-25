import { Header } from '@/components/shared/Header';
import { EarthquakeList } from '@/components/shared/EarthquakeList';
import { useEarthquakeData } from '@/hooks/useEarthquakeData';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { useState, lazy, Suspense } from 'react';
import { Skeleton } from './components/ui/skeleton';

const LazyMapContainer = lazy(() =>
  import('./components/shared/MapContainer').then((module) => ({
    default: module.MapContainer,
  }))
);

function App() {
  // get all data and state
  const { earthquakes, isLoading, error } = useEarthquakeData();
  const [selectedQuakeId, setSelectedQuakeId] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      <main className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <div className="w-full h-1/2 md:h-full md:w-2/3 lg:w-3/4">
          <Suspense fallback={<Skeleton className="h-full w-full" />}>
            <LazyMapContainer
              quakes={earthquakes}
              selectedQuakeId={selectedQuakeId}
            />
          </Suspense>
        </div>

        <div className="w-full h-1/2 md:h-full md:w-1/3 lg:w-1/4 border-l flex flex-col">
          {error ? (
            <div className="flex items-center justify-center p-4 h-full">
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          ) : (
            <EarthquakeList
              quakes={earthquakes}
              isLoading={isLoading}
              onQuakeSelect={setSelectedQuakeId}
              selectedQuakeId={selectedQuakeId}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
