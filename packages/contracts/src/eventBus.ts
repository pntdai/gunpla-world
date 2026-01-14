export type EventUnsubscribe = () => void;

export function publishEvent<Detail>(name: string, detail: Detail): void {
  if (typeof window === "undefined" || typeof CustomEvent === "undefined") {
    return;
  }

  const event = new CustomEvent<Detail>(name, { detail });
  window.dispatchEvent(event);
}

export function subscribeEvent<Detail>(
  name: string,
  handler: (detail: Detail, event: CustomEvent<Detail>) => void,
): EventUnsubscribe {
  if (typeof window === "undefined") {
    return () => {};
  }

  const listener = (event: Event) => {
    const customEvent = event as CustomEvent<Detail>;
    handler(customEvent.detail, customEvent);
  };

  window.addEventListener(name, listener as EventListener);

  return () => {
    window.removeEventListener(name, listener as EventListener);
  };
}

