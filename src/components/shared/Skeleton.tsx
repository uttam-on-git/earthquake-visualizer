import { cn } from '@/lib/utils';

// This is the shadcn/ui Skeleton component. It provides a simple, animated
// placeholder that we can use to build our loading states. It's a fundamental
// part of creating a good perceived performance.
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
}

export { Skeleton };
