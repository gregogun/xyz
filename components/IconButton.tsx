import { resets } from '@/styles/resets/button';
import { mauve } from '@radix-ui/colors';
import { css, styled } from 'stitches.config';

const iconButton = css({
  //   ...resets,
  cursor: 'pointer',
  border: 'none',
  padding: 0,
  margin: 0,
  textDecoration: 'none',
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  borderRadius: '$sm',

  boxShadow: `inset 0 0 0 1px var(--colors-elementBorder), 0 0 0 1px var(--colors-elementBorder)`,
  backgroundColor: '$elementBg',

  variants: {
    size: {
      md: {
        p: '$3',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

const IconButtonBase = styled('button', {
  ...iconButton,
});

export const IconButton = ({ children, ...props }: any) => {
  return <IconButtonBase {...props}>{children}</IconButtonBase>;
};
