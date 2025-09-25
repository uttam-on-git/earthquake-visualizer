import 'react-leaflet';

declare module 'react-leaflet' {
  export interface MarkerProps {
    customId?: string;
  }
}
