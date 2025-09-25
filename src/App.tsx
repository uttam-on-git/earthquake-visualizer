import { Header } from '@/components/shared/Header';
import { MapContainer } from '@/components/shared/MapContainer';
import { EarthquakeList } from '@/components/shared/EarthquakeList';
import { useEarthquakeData } from '@/hooks/useEarthquakeData';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

function App() {
  // get all data and state
  const { earthquakes, isLoading, error } = useEarthquakeData();

  return (
    <div className="flex flex-col h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      <main className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <MapContainer />
        {error ? (
          <div className="w-full h-1/2 md:h-full md:w-1/3 lg:w-1/4 border-l flex items-center justify-center p-4">
            <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </div>
        ) : (
          <EarthquakeList quakes={earthquakes} isLoading={isLoading} />
        )}
      </main>
    </div>
  );
}

export default App;
