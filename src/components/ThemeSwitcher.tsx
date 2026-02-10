import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "combinedlight" | "combineddark";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>("combineddark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const systemTheme: Theme = prefersDark ? "combineddark" : "combinedlight";

      setTheme(systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme =
      theme === "combineddark" ? "combinedlight" : "combineddark";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-10 h-10 rounded-full
                 border border-gold/40
                 text-gold hover:bg-gold/10
                 transition-all duration-300"
    >
      {theme === "combineddark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
