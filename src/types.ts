export interface Earthquake {
  id: string;
  mag: number;
  place: string;
  time: number; // Unix timestamp
  url: string;
  lat: number;
  lon: number;
}

interface FeatureProperties {
  mag: number;
  place: string;
  time: number;
  url: string;
}

interface FeatureGeometry {
  type: 'Point';
  coordinates: [number, number, number]; // [longitude, latitude, depth]
}

interface ApiFeature {
  type: 'Feature';
  id: string;
  properties: FeatureProperties;
  geometry: FeatureGeometry;
}

export interface UsgsApiResponse {
  type: 'FeatureCollection';
  features: ApiFeature[];
}
