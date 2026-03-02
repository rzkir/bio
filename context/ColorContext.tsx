import { computed, readonly, ref, watch } from "vue";
import { useTheme } from "./ThemaContext";

export type ColorSchemeId =
  | "slate"
  | "blue"
  | "emerald"
  | "violet"
  | "rose"
  | "amber";

export interface ColorValues {
  button: string;
  buttonHover: string;
  buttonText: string;
  border: string;
  cardBg: string;
  cardBorder: string;
}

const COLOR_PRESETS: Record<
  ColorSchemeId,
  { light: ColorValues; dark: ColorValues }
> = {
  slate: {
    light: {
      button: "hsl(210, 10%, 12%)",
      buttonHover: "hsl(210, 9%, 20%)",
      buttonText: "hsl(0, 0%, 100%)",
      border: "hsl(210, 17%, 90%)",
      cardBg: "hsl(0, 0%, 100%)",
      cardBorder: "hsl(210, 17%, 90%)",
    },
    dark: {
      button: "hsl(0, 0%, 98%)",
      buttonHover: "hsl(0, 0%, 90%)",
      buttonText: "hsl(210, 10%, 12%)",
      border: "hsl(0, 0%, 30%)",
      cardBg: "hsl(0, 0%, 9%)",
      cardBorder: "hsl(0, 0%, 30%)",
    },
  },
  blue: {
    light: {
      button: "hsl(220, 75%, 56%)",
      buttonHover: "hsl(220, 75%, 50%)",
      buttonText: "hsl(0, 0%, 100%)",
      border: "hsl(220, 90%, 80%)",
      cardBg: "hsl(0, 0%, 100%)",
      cardBorder: "hsl(220, 90%, 88%)",
    },
    dark: {
      button: "hsl(217, 90%, 60%)",
      buttonHover: "hsl(217, 90%, 68%)",
      buttonText: "hsl(0, 0%, 100%)",
      border: "hsl(222, 47%, 20%)",
      cardBg: "hsl(222, 47%, 11%)",
      cardBorder: "hsl(222, 60%, 25%)",
    },
  },
  emerald: {
    light: {
      button: "hsl(152, 72%, 40%)",
      buttonHover: "hsl(152, 72%, 34%)",
      buttonText: "hsl(0, 0%, 100%)",
      border: "hsl(152, 76%, 80%)",
      cardBg: "hsl(0, 0%, 100%)",
      cardBorder: "hsl(152, 76%, 86%)",
    },
    dark: {
      button: "hsl(152, 76%, 45%)",
      buttonHover: "hsl(152, 76%, 55%)",
      buttonText: "hsl(0, 0%, 100%)",
      border: "hsl(160, 84%, 16%)",
      cardBg: "hsl(160, 84%, 7%)",
      cardBorder: "hsl(160, 84%, 20%)",
    },
  },
  violet: {
    light: {
      button: "hsl(262, 83%, 58%)",
      buttonHover: "hsl(262, 83%, 52%)",
      buttonText: "hsl(0, 0%, 100%)",
      border: "hsl(262, 89%, 86%)",
      cardBg: "hsl(0, 0%, 100%)",
      cardBorder: "hsl(262, 89%, 90%)",
    },
    dark: {
      button: "hsl(262, 83%, 66%)",
      buttonHover: "hsl(262, 83%, 72%)",
      buttonText: "hsl(0, 0%, 100%)",
      border: "hsl(266, 67%, 30%)",
      cardBg: "hsl(266, 67%, 18%)",
      cardBorder: "hsl(266, 75%, 35%)",
    },
  },
  rose: {
    light: {
      button: "hsl(342, 75%, 52%)",
      buttonHover: "hsl(342, 75%, 45%)",
      buttonText: "hsl(0, 0%, 100%)",
      border: "hsl(342, 88%, 82%)",
      cardBg: "hsl(0, 0%, 100%)",
      cardBorder: "hsl(342, 88%, 88%)",
    },
    dark: {
      button: "hsl(342, 84%, 60%)",
      buttonHover: "hsl(342, 84%, 68%)",
      buttonText: "hsl(0, 0%, 100%)",
      border: "hsl(342, 70%, 30%)",
      cardBg: "hsl(342, 70%, 18%)",
      cardBorder: "hsl(342, 75%, 36%)",
    },
  },
  amber: {
    light: {
      button: "hsl(38, 85%, 50%)",
      buttonHover: "hsl(38, 85%, 44%)",
      buttonText: "hsl(0, 0%, 100%)",
      border: "hsl(45, 93%, 77%)",
      cardBg: "hsl(0, 0%, 100%)",
      cardBorder: "hsl(45, 93%, 84%)",
    },
    dark: {
      button: "hsl(38, 92%, 60%)",
      buttonHover: "hsl(38, 92%, 68%)",
      buttonText: "hsl(210, 10%, 12%)",
      border: "hsl(32, 77%, 27%)",
      cardBg: "hsl(32, 77%, 15%)",
      cardBorder: "hsl(32, 77%, 35%)",
    },
  },
};

const STORAGE_KEY = "color-scheme";

const colorScheme = ref<ColorSchemeId>("slate");
let initialized = false;

function initColor() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  const stored = window.localStorage.getItem(STORAGE_KEY) as ColorSchemeId | null;
  if (stored && stored in COLOR_PRESETS) {
    colorScheme.value = stored;
  }
}

function setColorScheme(scheme: ColorSchemeId) {
  colorScheme.value = scheme;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, scheme);
  }
}

function applyColors(theme: "light" | "dark", scheme: ColorSchemeId) {
  if (typeof document === "undefined") return;

  const preset = COLOR_PRESETS[scheme];
  const values = theme === "dark" ? preset.dark : preset.light;

  const root = document.documentElement;
  root.style.setProperty("--color-button", values.button);
  root.style.setProperty("--color-button-hover", values.buttonHover);
  root.style.setProperty("--color-button-text", values.buttonText);
  root.style.setProperty("--color-border", values.border);
  root.style.setProperty("--color-card-bg", values.cardBg);
  root.style.setProperty("--color-card-border", values.cardBorder);
}

export const COLOR_SCHEME_OPTIONS: { id: ColorSchemeId; label: string }[] = [
  { id: "slate", label: "Slate" },
  { id: "blue", label: "Blue" },
  { id: "emerald", label: "Emerald" },
  { id: "violet", label: "Violet" },
  { id: "rose", label: "Rose" },
  { id: "amber", label: "Amber" },
];

export function useColor() {
  initColor();
  const { theme } = useTheme();

  watch(
    [theme, colorScheme],
    ([t, s]) => applyColors(t as "light" | "dark", s as ColorSchemeId),
    { immediate: true }
  );

  const colors = computed(() => {
    const preset = COLOR_PRESETS[colorScheme.value];
    const values =
      theme.value === "dark" ? preset.dark : preset.light;
    return values;
  });

  return {
    colorScheme: readonly(colorScheme),
    colors,
    setColorScheme,
    COLOR_SCHEME_OPTIONS,
  };
}
