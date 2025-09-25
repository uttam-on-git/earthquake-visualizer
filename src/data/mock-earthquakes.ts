import type { Earthquake } from '@/types';

export const MOCK_EARTHQUAKES: Earthquake[] = [
  {
    id: '1',
    mag: 5.4,
    place: '150km N of Anchorage, Alaska',
    time: new Date('2025-09-25T10:00:00Z').getTime(),
    url: '#',
    lat: 62.15,
    lon: -149.9,
  },
  {
    id: '2',
    mag: 4.2,
    place: '45km E of Tokyo, Japan',
    time: new Date('2025-09-25T09:30:00Z').getTime(),
    url: '#',
    lat: 35.68,
    lon: 139.69,
  },
  {
    id: '3',
    mag: 1.8,
    place: 'Central California',
    time: new Date('2025-09-25T09:15:00Z').getTime(),
    url: '#',
    lat: 36.77,
    lon: -119.41,
  },
];
