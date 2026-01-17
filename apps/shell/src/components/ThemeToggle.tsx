import { Button } from "@repo/ui";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme from localStorage first
    const storedTheme = localStorage.theme;
    let isDarkMode = false;

    if (storedTheme === "dark") {
      isDarkMode = true;
    } else if (storedTheme === "light") {
      isDarkMode = false;
    } else {
      // Fall back to system preference if no stored theme
      isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    setIsDark(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark");
    localStorage.theme = newIsDark ? "dark" : "light";
  };

  return (
    <Button variant="outline" onClick={handleToggleTheme} className="gap-2">
      {isDark ? (
        <>
          <span>☀️</span>
          <span>Light</span>
        </>
      ) : (
        <>
          <span>🌙</span>
          <span>Dark</span>
        </>
      )}
    </Button>
  );
}
