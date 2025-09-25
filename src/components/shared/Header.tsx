import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="p-4 border-b bg-background z-10 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Updated Logo */}
          <img
            src="/logo.png"
            alt="Earthquake Visualizer Logo"
            className="w-8 h-8"
          />

          <h1 className="text-xl md:text-2xl font-bold tracking-tight">
            Earthquake Visualizer
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
