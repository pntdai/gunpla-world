export const SCAM_CHECKER_BUTTON_CLICKED = "gunpla:scam-checker:button-clicked" as const;

export type ScamCheckerButtonClickedPayload = {
  source: string;
  timestamp: number;
};

export * from "./eventBus";

