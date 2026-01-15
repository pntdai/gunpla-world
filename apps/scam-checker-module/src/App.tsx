import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@repo/ui";
import { StatusBadge } from "./components/StatusBadge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-center gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold text-center">Scam Checker Module</h1>
      <div className="card p-6 bg-card rounded-lg border space-y-4">
        <div className="flex gap-4 justify-center flex-wrap">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Button variant="secondary">Check Scam</Button>
          <Button variant="outline">Verify</Button>
          <Button variant="destructive">Report</Button>
        </div>
        <p className="text-center text-muted-foreground">
          Edit <code className="bg-muted px-2 py-1 rounded">src/App.tsx</code>{" "}
          and save to test HMR
        </p>
        <p className="text-sm text-center text-muted-foreground">
          Using Button component from <code>@repo/ui</code> - styles provided by
          shell app
        </p>
      </div>

      {/* Status Badge Demo - Using Semantic Color Tokens */}
      <div className="p-6 bg-card rounded-lg border space-y-4">
        <h2 className="text-xl font-semibold text-center">
          Status Badges (Semantic Colors)
        </h2>
        <p className="text-sm text-center text-muted-foreground">
          These badges use semantic color tokens that adapt to light/dark theme
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <StatusBadge status="scam" label="Confirmed Scammer" />
          <StatusBadge status="suspicious" label="Suspicious" />
          <StatusBadge status="legit" label="Legit Seller" />
          <StatusBadge status="info" label="Info" />
        </div>
        <p className="text-xs text-center text-muted-foreground">
          Toggle dark mode in the shell to see colors adapt automatically
        </p>
      </div>
    </div>
  );
}

export default App;
