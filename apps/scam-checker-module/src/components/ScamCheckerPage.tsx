import {
  Card,
  CardContent,
  Input,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@repo/ui";
import { useMemo, useState } from "react";
import {
  mockScammers,
  searchScammers,
  type Scammer,
} from "../data/mock-scammers";
import { ScammerDetail } from "./ScammerDetail";
import { ScammerList } from "./ScammerList";

function ScamCheckerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedScammer, setSelectedScammer] = useState<Scammer | null>(null);
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const results = useMemo(() => {
    if (!searchQuery.trim()) return [];
    setLoading(true);
    // Simulate API delay
    setTimeout(() => setLoading(false), 300);
    return searchScammers(searchQuery, mockScammers);
  }, [searchQuery]);

  const handleSelectScammer = (scammer: Scammer) => {
    setSelectedScammer(scammer);
    setMobileDetailOpen(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by useMemo on searchQuery change
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search by name, alias, platform, phone, or bank account..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-10"
            aria-label="Search scammer records"
          />
        </div>
      </form>

      {/* Empty State */}
      {!searchQuery.trim() && (
        <Card>
          <CardContent className="py-12 text-center">
            <h3 className="text-lg font-semibold mb-2">Start Searching</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Enter a name, platform, phone number, or other identifier to
              search for scammer records
            </p>
          </CardContent>
        </Card>
      )}

      {/* Results - Responsive Layout */}
      {searchQuery.trim() && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* List - Always visible on mobile, left side on desktop */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                {loading
                  ? "Searching..."
                  : `${results.length} result${
                      results.length !== 1 ? "s" : ""
                    } found`}
              </p>
            </div>
            <ScammerList
              scammers={results}
              selectedId={selectedScammer?.id || null}
              onSelect={handleSelectScammer}
              loading={loading}
            />
          </div>

          {/* Detail Panel - Hidden on mobile (shown in sheet), visible on desktop */}
          <div className="hidden lg:block lg:col-span-2">
            <ScammerDetail scammer={selectedScammer} />
          </div>
        </div>
      )}

      {/* Mobile Detail Sheet */}
      <Sheet
        open={mobileDetailOpen}
        onOpenChange={setMobileDetailOpen}
        side="bottom"
      >
        <SheetHeader>
          <SheetTitle>Scammer Details</SheetTitle>
        </SheetHeader>
        <SheetContent>
          <ScammerDetail
            scammer={selectedScammer}
            onClose={() => setMobileDetailOpen(false)}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ScamCheckerPage;
