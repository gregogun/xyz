import { css, styled } from 'stitches.config';
import { Box, Grid } from './Layout';
import { Navbar } from './Navbar';
import { Meta, Seo } from './Seo';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import { Link } from './Link';
import { Text } from './Text';
import { srOnly } from '@/styles/srOnly';

interface ContainerProps extends Meta {
  children: React.ReactNode;
}

const skipNav = css({
  '&[data-reach-skip-link]': {
    // '@bp1': {
    //   top: '$2',
    //   left: '$8',
    // },
    // '@bp3': {
    //   top: '$4',
    //   left: '$6',
    // },
    // '@bp4': {
    //   top: '$6',
    //   left: '$12',
    // },
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

const Header = styled('header');
const Main = styled('main');
const Footer = styled('footer');

export const Container = ({ children }: ContainerProps) => {
  return (
    <Box css={{ pt: '$32', backgroundColor: '$AppBg' }}>
      <Seo />
      <SkipNavLink className={skipNav()} />
      <Grid
        css={{
          maxWidth: '962px',
          margin: 'auto',
          gridTemplateRows: 'auto 1fr auto',
          height: '100%',
        }}
      >
        <Header>
          <Navbar />
        </Header>
        <SkipNavContent className={srOnly()} />
        <Main>{children}</Main>
        <Footer css={{ p: '$8' }}>
          <Text css={{ textAlign: 'center' }}>
            Built with ♥ and <Link href="https://nextjs.org">Next.js </Link>©
            2021 Greg Ogun.
          </Text>
        </Footer>
      </Grid>
    </Box>
  );
};
