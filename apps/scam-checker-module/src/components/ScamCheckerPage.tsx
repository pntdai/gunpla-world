import { Card, CardContent, Input } from "@repo/ui";
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
  const [detailModalOpen, setDetailModalOpen] = useState(false);
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
    setDetailModalOpen(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by useMemo on searchQuery change
  };

  return (
    <div className="space-y-6">
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

      {/* Results */}
      {searchQuery.trim() && (
        <div>
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
      )}

      {/* Detail Modal */}
      <ScammerDetail
        scammer={selectedScammer}
        open={detailModalOpen}
        onOpenChange={setDetailModalOpen}
      />
    </div>
  );
}

export default ScamCheckerPage;
