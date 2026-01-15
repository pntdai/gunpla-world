/**
 * Color system constants and helpers
 * 
 * These constants provide type-safe references to semantic color names
 * used throughout the application. They do not contain runtime values,
 * only string literals for consistency.
 */

export const STATUS_COLORS = {
  SCAM: "status-scam",
  SUSPICIOUS: "status-suspicious",
  LEGIT: "status-legit",
  INFO: "status-info",
} as const;

export type StatusColor = (typeof STATUS_COLORS)[keyof typeof STATUS_COLORS];

/**
 * Helper to get status color class names
 * 
 * @example
 * ```tsx
 * <div className={cn("bg-status-scam", "text-status-scam-foreground")}>
 *   Confirmed Scammer
 * </div>
 * ```
 */
export function getStatusColorClasses(status: StatusColor) {
  return {
    bg: `bg-${status}`,
    text: `text-${status}-foreground`,
    border: `border-${status}`,
  } as const;
}
