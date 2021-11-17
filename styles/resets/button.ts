import { mauve } from '@radix-ui/colors';
import { css } from 'stitches.config';

export const resets = css({
  cursor: 'pointer',
  border: 'none',
  padding: 0,
  margin: 0,
  // outline: 'none',
  // textDecoration: 'none',
  // alignItems: 'center',
  appearance: 'none',
  // boxSizing: 'border-box',
  // display: 'inline-flex',
  // userSelect: 'none',
  // WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  boxShadow: `inset 0 0 0 1px var(--colors-loContrast), 0 0 0 2px var(--colors-loContrast)`,
  backgroundColor: '$loContrast',

  variants: {
    size: {
      md: {
        p: '$3',
        // width: '$8',
        // height: '$8',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
