import { Spinner } from '@/components/ui/spinner';

export function MapLoading() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-muted">
      <Spinner className="h-12 w-12" />
    </div>
  );
}
