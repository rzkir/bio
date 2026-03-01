import { readonly, ref } from "vue";

export type ThemeMode = "light" | "dark";

const theme = ref<ThemeMode>("light");
let initialized = false;

function applyTheme(mode: ThemeMode) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

function initTheme() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  const stored = window.localStorage.getItem("theme-mode") as ThemeMode | null;
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initial: ThemeMode = stored ?? (prefersDark ? "dark" : "light");
  theme.value = initial;
  applyTheme(initial);
}

function setTheme(mode: ThemeMode) {
  theme.value = mode;

  if (typeof window !== "undefined") {
    window.localStorage.setItem("theme-mode", mode);
  }

  applyTheme(mode);
}

function toggleTheme() {
  setTheme(theme.value === "dark" ? "light" : "dark");
}

export function useTheme() {
  initTheme();

  return {
    theme: readonly(theme),
    setTheme,
    toggleTheme,
  };
}
