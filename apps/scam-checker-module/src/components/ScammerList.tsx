import { Card, CardContent } from "@repo/ui";
import type { Scammer } from "../data/mock-scammers";

interface ScammerListProps {
  scammers: Scammer[];
  selectedId: string | null;
  onSelect: (scammer: Scammer) => void;
  loading?: boolean;
}

export function ScammerList({
  scammers,
  selectedId,
  onSelect,
  loading,
}: ScammerListProps) {
  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 bg-muted animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  if (scammers.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">No results found</p>
          <p className="text-sm text-muted-foreground mt-2">
            Try adjusting your search terms
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {scammers.map((scammer) => (
        <Card
          key={scammer.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            selectedId === scammer.id
              ? "ring-2 ring-primary border-primary"
              : ""
          }`}
          onClick={() => onSelect(scammer)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect(scammer);
            }
          }}
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground truncate">
                    {scammer.name}
                  </h3>
                  {scammer.alias && (
                    <span className="text-sm text-muted-foreground">
                      ({scammer.alias})
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-statusScam/10 text-statusScam border border-statusScam/20 text-xs font-medium">
                    Scammer
                  </span>
                  <span>•</span>
                  <span>{scammer.platform}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {scammer.summary}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
