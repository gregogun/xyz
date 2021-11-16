import { createStitches, PropertyValue, ScaleValue } from '@stitches/react';
import type * as Stitches from '@stitches/react';

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
    colors: {},
    space: {},
    sizes: {},
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
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

const darkModeConfig = {
  colors: {},
};

export const darkTheme = createTheme('darkTheme', darkModeConfig);
export type StitchesCSS = Stitches.CSS<typeof config>;
