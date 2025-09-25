// For our static build, this component is just a placeholder.
// In the next phase, we will replace this with the actual react-leaflet map.
// This approach of building components incrementally is a clean workflow.
export function MapContainer() {
  return (
    <div className="w-full h-1/2 md:h-full md:w-2/3 lg:w-3/4 bg-muted flex items-center justify-center">
      <p className="text-muted-foreground text-lg">
        Interactive Map Will Be Rendered Here
      </p>
    </div>
  );
}
