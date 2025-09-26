import { Header } from '@/components/shared/Header';
import { EarthquakeList } from '@/components/shared/EarthquakeList';
import { useEarthquakeData } from '@/hooks/useEarthquakeData';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Maximize, Minimize } from 'lucide-react';
import { useState, lazy, Suspense } from 'react';
import { Button } from './components/ui/button';
import { cn } from './lib/utils';
import { MapLoading } from './components/shared/MapLoading';

const LazyMapContainer = lazy(() =>
  import('./components/shared/MapContainer').then((module) => ({
    default: module.MapContainer,
  }))
);

function App() {
  // get all data and state
  const { earthquakes, isLoading, error } = useEarthquakeData();
  const [selectedQuakeId, setSelectedQuakeId] = useState<string | null>(null);
  const [isMapFullScreen, setMapFullScreen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      <main className="flex flex-1 flex-col md:flex-row overflow-hidden relative">
        <div
          className={cn(
            'w-full md:w-2/3 lg:w-3/4',
            isMapFullScreen ? 'h-full' : 'h-1/2 md:h-full'
          )}
        >
          <Suspense fallback={<MapLoading />}>
            <LazyMapContainer
              quakes={earthquakes}
              selectedQuakeId={selectedQuakeId}
            />
          </Suspense>
          <Button
            size="icon"
            onClick={() => setMapFullScreen(!isMapFullScreen)}
            className="absolute top-4 right-4 z-[1000] md:hidden"
            aria-label={
              isMapFullScreen ? 'Exit full screen' : 'Enter full screen'
            }
          >
            {isMapFullScreen ? <Minimize /> : <Maximize />}
          </Button>
        </div>

        <div
          className={cn(
            'w-full h-1/2 md:h-full md:w-1/3 lg:w-1/4 border-l flex-col',
            isMapFullScreen ? 'hidden' : 'flex'
          )}
        >
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
