import { CSS, css, styled } from 'stitches.config';

export const heading = css({
  fontFamily: '$heading',
  color: '$hiContrast',

  variants: {
    //indetifier
    variant: {
      //choices[]
      h1: {
        '@bp1': {
          fontSize: '$4xl',
          lineHeight: '$4xl',
        },
        '@bp3': {
          fontSize: '$5xl',
          lineHeight: '$5xl',
        },
      },
      h2: {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },
      h3: {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      h4: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
    },
  },

  defaultVariants: {
    variant: 'h1',
  },
});

const Heading1 = styled('h1', {
  ...heading,
});

const Heading2 = styled('h2', {
  ...heading,
});

const Heading3 = styled('h3', {
  ...heading,
});

const Heading4 = styled('h4', {
  ...heading,
});

interface HeadingProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | undefined;
  css?: CSS;
  children: React.ReactNode;
}

export const Heading = ({ variant, css, children }: HeadingProps) => {
  if (variant === 'h2') {
    return (
      <Heading2 variant="h2" css={{ ...css }}>
        {children}
      </Heading2>
    );
  }

  if (variant === 'h3') {
    return (
      <Heading3 variant="h3" css={{ ...css }}>
        {children}
      </Heading3>
    );
  }

  if (variant === 'h4') {
    return (
      <Heading4 variant="h4" css={{ ...css }}>
        {children}
      </Heading4>
    );
  }

  return (
    <Heading1 variant="h1" css={{ ...css }}>
      {children}
    </Heading1>
  );
};
