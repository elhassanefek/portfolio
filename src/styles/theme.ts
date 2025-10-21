export const theme = {
  colors: {
    // Primary switched to mint/teal to remove orange from the UI
    primary: "#31C7B1",
    primaryDark: "#26A896",
    primaryLight: "#7FE1D3",

    background: "#FFF8E6", // warm cream
    backgroundAlt: "#FFFFFF",

    text: "#111111",
    textLight: "#3D3D3D",
    textMuted: "#6F6F6F",

    accent: {
      pink: "#FCA5A5",
      blue: "#93C5FD",
      peach: "#FCD5CE",
      yellow: "#FFE75E",
      mint: "#A7F3D0",
    },

    border: "#111111",
    shadow: "rgba(0, 0, 0, 1)",
  },

  fonts: {
    headingSerif: "'Playfair Display', serif",
    headingSans: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, system-ui, sans-serif",
    heading: "'Playfair Display', serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
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

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
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

  borderRadius: {
    sm: "4px",
    md: "10px",
    lg: "14px",
    xl: "18px",
    "2xl": "24px",
    full: "9999px",
  },

  shadows: {
    // Hard offset shadows for neobrutalism
    sm: "3px 3px 0 0 #111111",
    base: "4px 4px 0 0 #111111",
    md: "6px 6px 0 0 #111111",
    lg: "8px 8px 0 0 #111111",
    xl: "10px 10px 0 0 #111111",
    "2xl": "12px 12px 0 0 #111111",
  },

  transitions: {
    fast: "150ms ease-in-out",
    base: "300ms ease-in-out",
    slow: "500ms ease-in-out",
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

export default theme;
