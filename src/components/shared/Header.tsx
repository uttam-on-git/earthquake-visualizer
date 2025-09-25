import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="p-4 border-b bg-background z-10 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Updated Logo */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="logo-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
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
            {/* Outer pin */}
            <path
              fill="url(#logo-gradient)"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
            />
            {/* Inner circle */}
            <circle
              cx="12"
              cy="9.5"
              r="2.5"
              fill="hsl(var(--primary-foreground))"
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
