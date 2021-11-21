import useMediaQuery from '@/utils/hooks/useMediaQuery';
import { styled } from 'stitches.config';
import { Fade } from './Fade';
import { ThemeToggleButton } from './Navbar';
import { Tabs } from './Tabs';

const Overlay = styled('div', {
  zIndex: '$overlay',
  width: '100%',
  height: '100vh',
  position: 'fixed',
  display: 'grid',
  placeItems: 'center',
  bg: '$AppBg',
  right: 0,
});

export const MobileMenu = ({ clicked, toggleClicked }: any) => {
  const isLarge = useMediaQuery('(min-width: 768px)');
  if (clicked) {
    return (
      <Overlay
        css={{
          display: isLarge ? 'none' : 'block',
        }}
      >
        <Fade
          css={{
            height: '40%',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
          }}
        >
          <Tabs
            onClick={toggleClicked}
            direction="vertical"
            css={{ display: clicked ? 'flex' : 'none' }}
          />
          <ThemeToggleButton />
        </Fade>
      </Overlay>
    );
  }

  return null;
};
