import { createStitches, PropertyValue, ScaleValue } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { mauve, mauveDark, violet, violetDark } from '@radix-ui/colors';

const spaceTokens = {
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
    AppBg: mauveDark.mauve1,
    loContrast: mauveDark.mauve11,
    hiContrast: mauveDark.mauve12,
    muted: mauveDark.mauve9,
    elementBg: mauveDark.mauve3,
    elementBorder: mauveDark.mauve7,
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
      AppBg: mauve.mauve1,
      loContrast: mauve.mauve11,
      hiContrast: mauve.mauve12,
      muted: mauve.mauve9,
      elementBg: mauve.mauve3,
      elementBorder: mauve.mauve7,
    },
    space: {
      ...spaceTokens,
    },
    sizes: {
      ...spaceTokens,
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
      heading: 'Inter, sans-serif',
      body: 'Manrope, sans-serif',
    },
    fontWeights: {},
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
    zIndices: {},
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
    bp1: '(min-width: 280px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1440px)',
  },
  utils: {
    p: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
    }),
    pr: (value: ScaleValue<'space'>) => ({
      paddingRight: value,
    }),
    pb: (value: ScaleValue<'space'>) => ({
      paddingBottom: value,
    }),
    pl: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
    }),
    px: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: ScaleValue<'space'>) => ({
      marginTop: value,
    }),
    mr: (value: ScaleValue<'space'>) => ({
      marginRight: value,
    }),
    mb: (value: ScaleValue<'space'>) => ({
      marginBottom: value,
    }),
    ml: (value: ScaleValue<'space'>) => ({
      marginLeft: value,
    }),
    mx: (value: ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    w: (value: ScaleValue<'sizes'>) => ({
      width: value,
    }),
    h: (value: ScaleValue<'sizes'>) => ({
      height: value,
    }),
    boxSize: (value: ScaleValue<'sizes'>) => ({
      width: value,
      height: value,
    }),
    bg: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
  },
});

export const darkTheme = createTheme('darkTheme', darkModeConfig);
export type CSS = Stitches.CSS<typeof config>;
