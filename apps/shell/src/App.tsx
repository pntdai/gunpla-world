import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@repo/ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="max-w-4xl mx-auto p-8 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="block">
            <img
              src={viteLogo}
              className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#646cffaa]"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank" className="block">
            <img
              src={reactLogo}
              className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#61dafbaa]"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="text-5xl font-bold mb-8">Vite + React</h1>
        <div className="p-8 bg-card rounded-lg mb-8 space-y-4">
          <div className="flex gap-4 justify-center">
            <Button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <p className="mt-4">
            Edit <code className="bg-muted px-2 py-1 rounded">src/App.tsx</code>{" "}
            and save to test HMR
          </p>
          <p className="text-sm text-muted-foreground">
            Using Button component from <code>@repo/ui</code>
          </p>
        </div>
        <p className="text-muted-foreground">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
