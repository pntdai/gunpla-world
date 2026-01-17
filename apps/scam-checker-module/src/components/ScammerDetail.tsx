import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@repo/ui";
import { useState } from "react";
import type { Scammer } from "../data/mock-scammers";

interface ScammerDetailProps {
  scammer: Scammer | null;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ScammerDetail({
  scammer,
  open,
  onOpenChange,
}: ScammerDetailProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!scammer) {
    return null;
  }

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleReportMore = () => {
    window.dispatchEvent(
      new CustomEvent("scam-checker:report-more", {
        detail: { scammerId: scammer.id, scammerName: scammer.name },
      })
    );
  };

  const content = (
    <div className="space-y-6">
      {/* Header Info */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-statusScam text-statusScam-foreground border border-statusScam text-sm font-medium">
            Scammer
          </span>
          <span className="text-sm text-muted-foreground">
            {scammer.platform}
          </span>
        </div>
        {scammer.alias && (
          <p className="text-muted-foreground">Alias: {scammer.alias}</p>
        )}
      </div>

      {/* Summary */}
      <div>
        <h3 className="font-semibold mb-2">Summary</h3>
        <p className="text-sm text-muted-foreground">{scammer.summary}</p>
      </div>

      {/* Identifiers */}
      <div className="space-y-3">
        <h3 className="font-semibold mb-2">Identifiers</h3>

        {scammer.profileLink && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground min-w-[80px]">
              Profile:
            </span>
            <div className="flex-1 flex items-center gap-2">
              <a
                href={scammer.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline truncate flex-1"
              >
                {scammer.profileLink}
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  copyToClipboard(scammer.profileLink!, "profile")
                }
                className="h-8 px-2"
                aria-label="Copy profile link"
              >
                {copiedField === "profile" ? "✓" : "📋"}
              </Button>
            </div>
          </div>
        )}

        {scammer.phone && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground min-w-[80px]">
              Phone:
            </span>
            <div className="flex-1 flex items-center gap-2">
              <span className="text-sm text-foreground">{scammer.phone}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(scammer.phone!, "phone")}
                className="h-8 px-2"
                aria-label="Copy phone number"
              >
                {copiedField === "phone" ? "✓" : "📋"}
              </Button>
            </div>
          </div>
        )}

        {scammer.bankAccount && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground min-w-[80px]">
              Bank:
            </span>
            <div className="flex-1 flex items-center gap-2">
              <span className="text-sm text-foreground">
                {scammer.bankAccount}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(scammer.bankAccount!, "bank")}
                className="h-8 px-2"
                aria-label="Copy bank account"
              >
                {copiedField === "bank" ? "✓" : "📋"}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Report Info */}
      {(scammer.lastReported || scammer.reportCount) && (
        <div className="pt-4 border-t">
          <h3 className="font-semibold mb-2">Report Information</h3>
          <div className="space-y-2 text-sm">
            {scammer.lastReported && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Reported:</span>
                <span className="text-foreground">{scammer.lastReported}</span>
              </div>
            )}
            {scammer.reportCount !== undefined && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Reports:</span>
                <span className="text-foreground">{scammer.reportCount}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="pt-4 border-t space-y-2">
        <Button
          variant="outline"
          className="w-full"
          onClick={handleReportMore}
        >
          Report More Info
        </Button>
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{scammer.name}</DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
}
