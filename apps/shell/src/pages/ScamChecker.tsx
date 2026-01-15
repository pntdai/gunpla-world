import { Suspense, lazy } from "react";
import { ErrorBoundary } from "../components/ErrorBoundary";

const ScamCheckerPage = lazy(() => import("scamChecker/ScamCheckerPage"));

function LoadingFallback() {
  return (
    <div className="space-y-4">
      <div className="h-12 bg-muted animate-pulse rounded-lg" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-muted animate-pulse rounded-lg" />
        ))}
      </div>
    </div>
  );
}

function ErrorFallback(error: Error, reset: () => void) {
  return (
    <div className="rounded-lg border border-destructive bg-card p-6 space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-destructive mb-2">
          Failed to load Scam Checker
        </h2>
        <p className="text-sm text-muted-foreground">
          The remote module could not be loaded. Please try again.
        </p>
      </div>
      <div className="text-sm text-muted-foreground">
        <p className="font-medium mb-2">Error details:</p>
        <code className="block p-3 bg-muted rounded text-xs overflow-auto">
          {error.message}
        </code>
      </div>
      <div className="flex gap-2">
        <button
          onClick={reset}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 border border-input bg-background rounded-md hover:bg-accent"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}

export function ScamChecker() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Scam Checker</h1>
        <p className="text-muted-foreground">
          Search and view scammer records to help protect the community
        </p>
      </div>

      <ErrorBoundary fallback={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <ScamCheckerPage />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
