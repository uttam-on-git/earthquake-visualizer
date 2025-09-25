import { ThemeToggle } from './ThemeToggle';
export function Header() {
  return (
    <header className="p-4 border-b bg-background z-10 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: 'hsl(var(--primary))' }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: 'hsl(var(--secondary))' }}
                />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad1)" />
            <path
              d="M25,50 C35,30 65,70 75,50"
              stroke="hsl(var(--primary-foreground))"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M30,60 C40,40 70,80 80,60"
              stroke="hsl(var(--primary-foreground))"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">
            Earthquake Visualizer
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
