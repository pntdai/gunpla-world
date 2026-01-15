import {
  SCAM_CHECKER_BUTTON_CLICKED,
  subscribeEvent,
  type ScamCheckerButtonClickedPayload,
} from "@repo/contracts";
import { Button } from "@repo/ui";
import { Suspense, lazy, useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";

const RemoteWidget = lazy(() => import("scamChecker/RemoteWidget"));

function RemoteEventDemo() {
  useEffect(() => {
    const unsubscribe = subscribeEvent<ScamCheckerButtonClickedPayload>(
      SCAM_CHECKER_BUTTON_CLICKED,
      (detail) => {
        // Required log message
        console.log("Shell received event: button in remote is clicked");
        console.log(detail);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="container mx-auto p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Remote Event Demo</h1>
          <a href="/" className="inline-flex">
            <Button variant="outline">← Back to Home</Button>
          </a>
        </div>
        <p className="text-muted-foreground">
          This page subscribes to a CustomEvent published by the remote
          scam-checker module. Open the browser console and click the button
          inside the remote widget below.
        </p>
        <Suspense
          fallback={
            <div className="flex items-center justify-center p-8">
              <div className="text-muted-foreground">
                Loading remote widget...
              </div>
            </div>
          }
        >
          <RemoteWidget />
        </Suspense>
      </div>
    </div>
  );
}

export default RemoteEventDemo;
