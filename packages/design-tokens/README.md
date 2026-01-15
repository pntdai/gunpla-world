# Design Tokens

This package contains the source-of-truth for design tokens, specifically color tokens used throughout the monorepo.

## Color System Rules

### ✅ DO

- **Always use semantic color classes/tokens** from the design system:
  - `bg-background`, `text-foreground`, `border-border`, `ring-ring`
  - `bg-primary`, `text-primary-foreground`
  - `bg-secondary`, `text-secondary-foreground`
  - `bg-muted`, `text-muted-foreground`
  - `bg-accent`, `text-accent-foreground`
  - `bg-destructive`, `text-destructive-foreground`
  - `bg-card`, `text-card-foreground`
  - `bg-popover`, `text-popover-foreground`

- **Use domain-specific status colors** for scam-checker module:
  - `bg-status-scam`, `text-status-scam-foreground` - For confirmed scammer/danger
  - `bg-status-suspicious`, `text-status-suspicious-foreground` - For suspicious/warning
  - `bg-status-legit`, `text-status-legit-foreground` - For legit seller/success
  - `bg-status-info`, `text-status-info-foreground` - For neutral/info states

- **Rely on host theme**: Remotes inherit colors from the shell app's global CSS. Do not inject global Tailwind base in remotes.

- **Use CSS variables**: All colors are defined as CSS variables in `apps/shell/src/globals.css` and work automatically with Tailwind.

### ❌ DON'T

- **Never hardcode hex colors** (e.g., `#FF0000`, `rgb(255, 0, 0)`) in components or app code
- **Never use raw palette colors** directly (e.g., `bg-red-500`) - use semantic tokens instead
- **Never inject global CSS** in remote modules - the shell owns all global styles
- **Never create duplicate color definitions** - always reference the design tokens

### Exception

The only exception to hardcoded colors is for tiny, one-off visualizations (e.g., data visualization charts) where semantic tokens don't apply. This should be rare and documented.

## Theme Support

The color system supports both light and dark themes. The shell app manages theme switching via the `.dark` class on the root element. All semantic tokens automatically adapt to the current theme.

## Adding New Colors

1. Update `colors.json` with new palette or semantic tokens
2. Add CSS variables in `apps/shell/src/globals.css` for both `:root` and `.dark`
3. Extend Tailwind config in `apps/shell/tailwind.config.ts` to expose the new tokens
4. Update this README with usage guidelines

## Structure

- `colors.json` - Source of truth for all color tokens (palette + semantic mappings)
