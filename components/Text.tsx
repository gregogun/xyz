import { css, styled } from 'stitches.config';

export const text = css({
  fontFamily: '$body',
  fontWeight: 'normal',

  variants: {
    size: {
      xs: {
        $$size: '$fontSizes$xs',
        fontSize: '$$size',
        lineHeight: '$$size',
      },
      sm: {
        $$size: '$fontSizes$sm',
        fontSize: '$$size',
        lineHeight: '$$size',
      },
      md: {
        $$size: '$fontSizes$md',
        fontSize: '$$size',
        lineHeight: '$$size',
      },
      lg: {
        $$size: '$fontSizes$lg',
        fontSize: '$size',
        lineHeight: '$$size',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const Text = styled('p', {
  ...text,
});
