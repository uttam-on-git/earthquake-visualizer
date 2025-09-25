import { useState, useEffect } from 'react';
import type { Earthquake } from '@/types';
import { getEarthquakeData } from '@/services/earthquakeService';

export function useEarthquakeData() {
  // State to hold the raw earthquake data from the API.
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  // State to manage the loading status of the API call.
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // State to hold any potential errors during the fetch.
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEarthquakeData();
        setEarthquakes(data);
      } catch {
        setError('Failed to load earthquake data. Please try again later.');
      } finally {
        // This ensures loading is set to false regardless of success or failure.
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { earthquakes, isLoading, error };
}
