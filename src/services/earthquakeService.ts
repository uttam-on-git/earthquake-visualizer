import type { Earthquake, UsgsApiResponse } from '@/types';

// The API endpoint for fetching earthquake data for the past day
const USGS_API_URL =
  'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

export async function getEarthquakeData(): Promise<Earthquake[]> {
  try {
    const response = await fetch(USGS_API_URL);
    // if the response is not successful, throw an error
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data: UsgsApiResponse = await response.json();

    const formattedData: Earthquake[] = data.features.map((feature) => ({
      id: feature.id,
      mag: feature.properties.mag,
      place: feature.properties.place,
      time: feature.properties.time,
      url: feature.properties.url,
      // GeoJSON coordinates are [longitude, latitude], so we map them correctly
      lon: feature.geometry.coordinates[0],
      lat: feature.geometry.coordinates[1],
    }));

    return formattedData;
  } catch (error) {
    console.error('Failed to fetch earthquake data:', error);
    throw error;
  }
}
