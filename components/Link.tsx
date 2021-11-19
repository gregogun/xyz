import NextLink from 'next/link';
import { CSS, styled } from 'stitches.config';
import { mauve, violet } from '@radix-ui/colors';

const LinkBase = styled('a', {
  margin: 0,
  fontFamily: '$body',
  fontWeight: '$bold',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  color: 'inherit',
  textDecoration: 'none',

  variants: {
    variant: {
      default: {
        display: 'inlineBlock',
        position: 'relative',

        '&::after': {
          content: '',
          position: 'absolute',
          width: '100%',
          height: '2px',
          bottom: -3,
          left: 0,
          background: '$violet9',
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left',
          transition: 'transform 0.4s cubic-bezier(0.86, 0, 0.07, 1)',
        },

        '&:hover': {
          color: '$violet11',
          '&::after': {
            transform: 'scaleX(0)',
            transformOrigin: 'bottom right',
          },
        },
      },
      button: {
        bg: '$link',
        textDecoration: 'none',
      },
      ghost: {},
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
  variant?: 'default' | 'button' | 'ghost';
}

export const Link = ({ href, children, variant, css }: LinkProps) => {
  if (href.includes('https')) {
    return (
      <LinkBase
        href={href}
        rel="noreferrer noopener"
        target="_blank"
        variant={variant}
        css={{ ...css }}
      >
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
