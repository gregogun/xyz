import NextLink from 'next/link';
import { CSS, styled } from 'stitches.config';
import { mauve, violet } from '@radix-ui/colors';

const LinkBase = styled('a', {
  margin: 0,
  fontFamily: '$body',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  color: 'inherit',
  '&:focus': {
    boxShadow: '0 0 0 1px var(--colors-link)',
  },

  variants: {
    variant: {
      styled: {
        position: 'relative',
        textDecoration: 'none',

        '&::before, &::after': {
          position: 'absolute',
          background: 'currentColor',
          width: '100%',
          height: '1px',
          top: '100%',
          left: '0',
          pointerEvents: 'none',
        },

        '&::before': {
          content: '',
          transformOrigin: '100% 50%',
          transform: 'scale3d(0, 1, 1)',
          transition: 'transform 0.3s',
        },

        '&:hover': {
          '&::before': {
            transformOrigin: '0% 50%',
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
      button: {
        bg: '$link',
        textDecoration: 'none',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface LinkProps {
  href: string;
  children: React.ReactNode | string;
  css?: CSS;
  variant?: 'styled' | 'button';
}

export const Link = ({ href, children, variant, css, ...props }: LinkProps) => {
  if (href.includes('https')) {
    return (
      <LinkBase variant={variant} css={{ ...css }} href={href}>
        {children}
      </LinkBase>
    );
  }

  return (
    <NextLink href={href} passHref>
      <LinkBase variant={variant} css={{ ...css }}>
        {children}
      </LinkBase>
    </NextLink>
  );
};
