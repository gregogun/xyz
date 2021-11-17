import NextLink from 'next/link';
import { CSS, css, styled } from 'stitches.config';

const LinkBase = styled('a', {
  margin: 0,
  fontFamily: '$body',

  variants: {
    type: {
      line: {
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        color: 'inherit',
        boxShadow: '0px 1px 0px 0px $colors$tertiary',
        transition: 'all 200ms linear 0ms',
        textDecoration: 'none',

        '&:hover': {
          color: '$loContrast',
          transition: 'all 200ms linear 0ms',
        },
      },
      noLine: {
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        color: 'inherit',
        transition: 'all 200ms linear 0ms',
        textDecoration: 'none',

        '&:hover': {
          color: '$loContrast',
          transition: 'all 200ms linear 0ms',
        },
      },
      ghost: {
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        color: 'inherit',
        transition: 'all 200ms linear 0ms',
        textDecoration: 'none',
      },
    },
  },
  defaultVariants: {
    type: 'line',
  },
});

interface LinkProps {
  href: string;
  children: React.ReactNode | string;
  css?: CSS;
}

export const Link = ({ href, children, css, ...props }: LinkProps) => {
  if (href.includes('https')) {
    return (
      <LinkBase css={{ ...css }} href={href}>
        {children}
      </LinkBase>
    );
  }

  return (
    <NextLink href={href} passHref>
      <LinkBase css={{ ...css }}>{children}</LinkBase>
    </NextLink>
  );
};
