import { Button } from "@repo/ui";
import { Suspense, lazy, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const ScamCheckerApp = lazy(() => import("scamChecker/App"));

function Home() {
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
        <div className="mb-4">
          <Link to="/scam-checker">
            <Button variant="outline">Go to Scam Checker Module</Button>
          </Link>
        </div>
        <p className="text-muted-foreground">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

function ScamCheckerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline">← Back to Home</Button>
          </Link>
        </div>
        <div className="mb-4 p-4 bg-card rounded-lg border">
          <h2 className="text-2xl font-bold mb-2">Scam Checker Module</h2>
          <p className="text-muted-foreground">
            This page loads the remote module via Module Federation
          </p>
        </div>
        <Suspense
          fallback={
            <div className="flex items-center justify-center p-8">
              <div className="text-muted-foreground">
                Loading remote module...
              </div>
            </div>
          }
        >
          <ScamCheckerApp />
        </Suspense>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scam-checker" element={<ScamCheckerPage />} />
    </Routes>
  );
}

export default App;
