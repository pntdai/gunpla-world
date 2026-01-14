import { Button } from "@repo/ui";
import {
  SCAM_CHECKER_BUTTON_CLICKED,
  publishEvent,
  type ScamCheckerButtonClickedPayload,
} from "@repo/contracts";

function RemoteWidget() {
  const handleClick = () => {
    const payload: ScamCheckerButtonClickedPayload = {
      source: "scam-checker-module",
      timestamp: Date.now(),
    };

    publishEvent(SCAM_CHECKER_BUTTON_CLICKED, payload);
  };

  return (
    <div className="space-y-4 p-4 bg-card rounded-lg border">
      <h2 className="text-xl font-semibold">Remote Widget (scam-checker-module)</h2>
      <p className="text-sm text-muted-foreground">
        Click the button below to publish an event to the shell via window CustomEvent.
      </p>
      <Button onClick={handleClick}>Click me (remote)</Button>
    </div>
  );
}

export default RemoteWidget;

