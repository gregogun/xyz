import { createStitches, PropertyValue, ScaleValue } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { slate, slateDark } from '@radix-ui/colors';

const spaceTokens = {
  0: '0px',
  px: '1px',
  // 0.5: "0.125rem",
  1: '0.25rem',
  // 1.5: "0.375rem",
  2: '0.5rem',
  // 2.5: "0.625rem",
  3: '0.75rem',
  // 3.5: "0.875rem",
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

const darkModeConfig = {
  colors: {
    ...slateDark,

    app: slateDark.slate1,
    loContrast: slateDark.slate11,
    hiContrast: slateDark.slate12,
    muted: slateDark.slate9,
    elementBg: slateDark.slate3,
    elementBorder: slateDark.slate7,
  },
};

export const {
  styled,
  theme,
  createTheme,
  config,
  css,
  getCssText,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      ...slate,

      AppBg: slate.slate1,
      loContrast: slate.slate11,
      hiContrast: slate.slate12,
      muted: slate.slate9,
      elementBg: slate.slate3,
      elementBorder: slate.slate7,
    },
    space: {
      ...spaceTokens,
    },
    sizes: {
      ...spaceTokens,
      max: 'max-content',
      min: 'min-content',
      full: '100%',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '50rem',
      '5xl': '56rem',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fonts: {
      heading: 'Lora, serif',
      body: 'Lora, serif',
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    lineHeights: {
      xs: '1rem',
      sm: '1.25rem',
      md: '1.5rem',
      lg: '1.75rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {
      subtle:
        'inset 0 0 0 1px var(--colors-elementBorder), 0 0 0 1px var(--colors-elementBorder)',
    },
    radii: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '24px',
      full: '9999px',
    },
    shadows: {},
    transitions: {},
    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
    sm: '(min-width: 500px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1440px)',
  },
  utils: {
    p: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    bg: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: ScaleValue<'radii'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: ScaleValue<'radii'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: ScaleValue<'radii'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: ScaleValue<'radii'>) => ({
      borderTopLeftRadius: value,
    }),
    ox: (value: PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: PropertyValue<'overflowY'>) => ({ overflowY: value }),

    w: (value: PropertyValue<'width'>) => ({ width: value }),
    h: (value: PropertyValue<'height'>) => ({ height: value }),
    maxW: (value: PropertyValue<'maxWidth'>) => ({ maxWidth: value }),
    maxH: (value: PropertyValue<'maxHeight'>) => ({ maxHeight: value }),

    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    userSelect: (value: PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    appearance: (value: PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export const darkTheme = createTheme('darkTheme', darkModeConfig);
export type CSS = Stitches.CSS<typeof config>;
