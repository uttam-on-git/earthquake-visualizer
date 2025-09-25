import { useState } from 'react';
import { Header } from '@/components/shared/Header';
import { MapContainer } from '@/components/shared/MapContainer';
import { EarthquakeList } from '@/components/shared/EarthquakeList';
import { MOCK_EARTHQUAKES } from '@/data/mock-earthquakes';

function App() {
  const [isLoading] = useState(false);
  const [quakes] = useState(MOCK_EARTHQUAKES);
  return (
    <div className="flex flex-col h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      <main className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <MapContainer />
        <EarthquakeList quakes={quakes} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;
