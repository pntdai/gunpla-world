import * as React from "react";
import { cn } from "../../lib/utils";

interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "top" | "right" | "bottom" | "left";
}

const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ className, open, onOpenChange, side = "right", children, ...props }, ref) => {
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [open]);

    if (!open) return null;

    const sideClasses = {
      top: "top-0 left-0 right-0 bottom-auto",
      right: "top-0 right-0 bottom-0 left-auto",
      bottom: "bottom-0 left-0 right-0 top-auto",
      left: "top-0 left-0 bottom-0 right-auto",
    };

    return (
      <>
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => onOpenChange?.(false)}
          aria-hidden="true"
        />
        <div
          ref={ref}
          className={cn(
            "fixed z-50 bg-background border shadow-lg",
            side === "top" && "h-auto max-h-[90vh] rounded-b-lg",
            side === "bottom" && "h-auto max-h-[90vh] rounded-t-lg",
            side === "left" && "w-full sm:w-96 h-full rounded-r-lg",
            side === "right" && "w-full sm:w-96 h-full rounded-l-lg",
            sideClasses[side],
            className
          )}
          {...props}
        >
          {children}
        </div>
      </>
    );
  }
);
Sheet.displayName = "Sheet";

const SheetHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 text-center sm:text-left p-6", className)}
    {...props}
  />
));
SheetHeader.displayName = "SheetHeader";

const SheetTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

const SheetContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("overflow-y-auto h-full p-6", className)}
    {...props}
  />
));
SheetContent.displayName = "SheetContent";

export { Sheet, SheetHeader, SheetTitle, SheetContent };
