export const theme = {
  colors: {
    // Backgrounds
    bgPrimary: '#eef2f7',
    bgSection: '#f8fafc',
    bgCard: '#ffffff',
    bgHero: 'rgba(7,17,31,0.72)',

    // Text
    textPrimary: '#0f172a',
    textSecondary: '#334155',
    textMuted: '#64748b',
    textLink: '#2563eb',
    textHighlight: '#0f766e',
    textAccentBlue: '#2563eb',

    // Core accents
    greenPrimary: '#0f766e',
    greenLight: '#34d399',
    greenMint: '#dcfce7',
    greenMintDark: '#86efac',
    greenDark: '#064e3b',
    greenCTA: '#0f766e',

    // Accent
    accentOrange: '#f97316',
    accentTeal: '#0ea5a4',

    // UI
    border: '#dbe4ef',
    borderCard: '#e2e8f0',
    shadow: 'rgba(15,23,42,0.08)',
    shadowHover: 'rgba(15,23,42,0.16)',

    // Tags
    tagBg: 'rgba(37,99,235,0.08)',
    tagText: '#1d4ed8',
    tagBorder: 'rgba(37,99,235,0.18)',
  },
  fonts: {
    heading: "'Manrope', 'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    hero: 'clamp(2.5rem, 6vw, 4.5rem)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    section: 'clamp(3rem, 6vw, 6rem)',
  },
  radius: {
    sm: '8px',
    md: '14px',
    lg: '18px',
    xl: '28px',
    full: '9999px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  transitions: {
    fast: '0.15s ease',
    base: '0.25s ease',
    slow: '0.4s ease',
  },
};
