import { cn } from "@repo/ui";

type StatusType = "scam" | "suspicious" | "legit" | "info";

interface StatusBadgeProps {
  status: StatusType;
  label: string;
  className?: string;
}

const statusConfig: Record<
  StatusType,
  { bg: string; text: string; border: string }
> = {
  scam: {
    bg: "bg-statusScam",
    text: "text-statusScam-foreground",
    border: "border-statusScam",
  },
  suspicious: {
    bg: "bg-statusSuspicious",
    text: "text-statusSuspicious-foreground",
    border: "border-statusSuspicious",
  },
  legit: {
    bg: "bg-statusLegit",
    text: "text-statusLegit-foreground",
    border: "border-statusLegit",
  },
  info: {
    bg: "bg-statusInfo",
    text: "text-statusInfo-foreground",
    border: "border-statusInfo",
  },
};

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border",
        config.bg,
        config.text,
        config.border,
        className,
      )}
    >
      {label}
    </span>
  );
}
