// Technical brutalism design tokens. Components must read every color,
// font, border, radius and shadow from here — no hardcoded values elsewhere.

const ink = "#111111";

export const theme = {
  colors: {
    paper: "#F4F1EA", // page background
    surface: "#FFFFFF", // cards
    ink, // text, borders, shadows
    muted: "#5A5A5A", // metadata
    accent: "#31C7B1", // site accent (mint)

    // Faint grid-paper lines drawn over the paper background
    grid: "rgba(17, 17, 17, 0.06)",

    // Per-project accents (text on these fills is always ink)
    project: {
      transacta: "#F7AE85", // apricot
      nounoudz: "#998BBF", // lavender from the NounouDZ logo
      camembert: "#4D7CFE",
      gdgEvents: "#2BB673",
    },

    // Soft tints reused by archive projects and secondary fills
    tint: {
      mint: "#C9F0E9",
      yellow: "#FFF1B8",
      coral: "#FFD9CF",
      blue: "#D6E1FF",
      green: "#CDEFD9",
      lilac: "#E7DDF8",
    },

    // Feedback fills; both keep AA contrast with ink text
    status: {
      success: "#2BB673",
      danger: "#FF6B4A",
    },
  },

  fonts: {
    heading: "'Space Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif",
    body: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  },

  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
  },

  // Only weights loaded from Google Fonts in index.html
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.15,
    normal: 1.5,
    relaxed: 1.7,
  },

  spacing: {
    xs: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "3rem", // 48px
    "2xl": "4rem", // 64px
    "3xl": "6rem", // 96px
    "4xl": "8rem", // 128px
    "5xl": "12rem", // 192px
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  borders: {
    width: "3px",
    base: `3px solid ${ink}`,
    thin: `2px solid ${ink}`,
  },

  // Square corners; `sm` is only for small tags
  radii: {
    none: "0",
    sm: "2px",
  },

  // Hard offset shadows, never blurred
  shadows: {
    none: `0 0 0 0 ${ink}`,
    sm: `4px 4px 0 0 ${ink}`, // small elements
    md: `8px 8px 0 0 ${ink}`, // cards
  },

  // Distance an element travels toward its shadow on press
  press: {
    sm: "4px",
    md: "8px",
  },

  focus: {
    outline: `3px solid ${ink}`,
    offset: "3px",
  },

  layout: {
    headerHeight: "64px",
  },

  transitions: {
    fast: "120ms ease-out",
    base: "200ms ease-out",
    slow: "400ms ease-out",
  },

  zIndex: {
    base: 1,
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    modal: 400,
    popover: 500,
    tooltip: 600,
  },
} as const;

export type AppTheme = typeof theme;
export type TintKey = keyof AppTheme["colors"]["tint"];
export type ProjectAccentKey = keyof AppTheme["colors"]["project"];
/** A project's accent: one of the per-project colors or an archive tint. */
export type AccentKey = ProjectAccentKey | TintKey;

export const accentColor = (t: AppTheme, key: AccentKey): string =>
  key in t.colors.project
    ? t.colors.project[key as ProjectAccentKey]
    : t.colors.tint[key as TintKey];

export default theme;
