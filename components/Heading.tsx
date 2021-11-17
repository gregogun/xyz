import { CSS, css, styled } from 'stitches.config';

export const heading = css({
  fontFamily: '$heading',

  variants: {
    //indetifier
    variant: {
      //choices[]
      h1: {
        $$size: '$fontSizes$5xl',
        fontSize: '$$size',
        lineHeight: '$$size',
      },
      h2: {
        $$size: '$fontSizes$4xl',
        fontSize: '$$size',
        lineHeight: '$$size',
      },
      h3: {
        $$size: '$fontSizes$2xl',
        fontSize: '$$size',
        lineHeight: '$$size',
      },
      h4: {
        $$size: '$fontSizes$xl',
        fontSize: '$$size',
        lineHeight: '$$size',
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
