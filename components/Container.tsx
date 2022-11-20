import { styled } from 'stitches.config';
import { Meta, Seo } from './Seo';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';

const StyledContainer = styled('div', {
  mt: 80,
  mx: 'auto',
  px: '$5',
  maxWidth: 600,

  '@md': {
    mt: 128,
    px: 0,
  },
});

const StyledSkipNav = styled(SkipNavLink, {
  '&[data-reach-skip-link]': {
    position: 'absolute',
    top: '$10 ',
    left: '$64',
    p: '$4',
    borderRadius: '$md',
    textDecoration: 'none',
    transform: 'translateX(-500%)',
    transition: 'transform 500ms',
  },
  '&[data-reach-skip-link]:focus': {
    transform: 'translateX(100%)',
    color: '$loContrast',
  },
  '&[data-reach-skip-link]:visited': {
    color: '$loContrast',
  },
});

interface ContainerProps extends Meta {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <StyledContainer>
      <Seo />
      <StyledSkipNav />
      {children}
    </StyledContainer>
  );
};
