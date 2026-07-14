export default {
  colors: {
    primary: '#304CA2',
    primaryDark: '#24397D',
    highlight: '#F98E08',
    // highlight is too low-contrast for text on white (≈2.2:1);
    // use highlightText for orange *text*, highlight for graphics only.
    highlightText: '#B05E00',
    offlight: '#FDEFD9', // 15% opacity on highlight
    background: '#FFFFFF',
    muted: '#F4F5F7',
    accent: '#DBDEEF',
    text: '#373E49',
    // was #AAAAAA (≈2.3:1 on white — failed WCAG AA); this passes 4.5:1
    offtext: '#6E7683',

    // data viz
    airsuperiorityblue: '#6A9FB4',
    shinyshamrock: '#54A06F',
    wintergreendream: '#679289',
    teagreen: '#C8D6AF',
    charmpink: '#DB93B0',

    // 8 accents https://colorbrewer2.org/#type=qualitative&scheme=Accent&n=8
    accent1: '#7fc97f',
    accent2: '#beaed4',
    accent3: '#fdc086',
    accent4: '#386cb0',
    accent5: '#ffff99',
    accent6: '#f0027f',
    accent7: '#bf5b17',
    accent8: '#666666',

    // sequential class 3
    accent9: '#fb6a4a',
    accent10: '#de2d26',
    accent11: '#a50f15',

    // Facebook/Meta Data For Good Relative Wealth Index colors (based on accent3)
    rwi_accent1: '#fee5cd',
    rwi_accent2: '#fdca9b',
    rwi_accent3: '#fcb069',
    rwi_accent4: '#fb9637',
    rwi_accent5: '#fa7b05',
    rwi_accent6: '#c86304',
    rwi_accent7: '#964a03',
    rwi_accent8: '#643102',
  },
  fonts: {
    body: "'IBM Plex Sans', 'Segoe UI', sans-serif",
    heading: "'Bricolage Grotesque', 'Segoe UI', sans-serif",
  },
  // px values (was pt). Index roles:
  // 0 tiny labels / uppercase taglines, 1 body, 2 buttons & small headings,
  // 3 section headings, 4 page headings, 5 display (prefer clamp() for hero)
  fontSizes: [12, 16, 18, 20, 34, 56],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  space: [0, 4, 8, 16, 32, 70],
  radii: [0, 4, 8, 14, 999],
  shadows: {
    sm: '0 1px 2px rgba(23, 31, 60, 0.08), 0 1px 6px rgba(23, 31, 60, 0.06)',
    md: '0 2px 6px rgba(23, 31, 60, 0.08), 0 10px 24px rgba(23, 31, 60, 0.1)',
    lg: '0 4px 10px rgba(23, 31, 60, 0.1), 0 24px 48px rgba(23, 31, 60, 0.14)',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
}
