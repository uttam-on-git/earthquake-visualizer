export interface Earthquake {
  id: string;
  mag: number;
  place: string;
  time: number; // Unix timestamp
  url: string;
  lat: number;
  lon: number;
}
