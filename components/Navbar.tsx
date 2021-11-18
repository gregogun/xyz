import { mauve } from '@radix-ui/colors';
import { SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/dist/client/router';
import { ReactNode, SetStateAction, useEffect, useState } from 'react';
import { css, styled } from 'stitches.config';
import { IconButton } from './IconButton';
import { Logo } from './icons';
import { List, ListItem } from './Layout';
import { Link } from './Link';

// toggles light/dark mode
const ThemeToggle = ({ children, ...props }: any) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const mode = theme === 'dark' ? 'light' : 'dark';

  return (
    <IconButton aria-label={`Activate ${mode} mode`} onClick={toggleTheme}>
      {children}
    </IconButton>
  );
};

const icon = css({
  width: '$4',
  height: '$4',
});

const ThemeToggleButton = ({ ...props }) => {
  return (
    <ThemeToggle {...props}>
      <SunIcon className={icon()} />
    </ThemeToggle>
  );
};

const NavbarWrapper = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const NavMenu = () => {
  return (
    <List css={{ display: 'flex', gap: '$3' }}>
      <NavMenuItem name="/" href="/">
        home
      </NavMenuItem>
      <NavMenuItem name="projects" href="/projects">
        projects
      </NavMenuItem>
      <NavMenuItem name="digitalgarden" href="/digitalgarden">
        digital garden
      </NavMenuItem>
    </List>
  );
};

interface NavMenuItemProps {
  children: string | React.ReactNode;
  href: string;
  name: string;
}

const NavMenuItem = ({ children, href, name, ...props }: NavMenuItemProps) => {
  const router = useRouter();

  const isActive = name === router.pathname;

  return (
    <ListItem>
      <Link
        variant="styled"
        css={{
          color: isActive ? '$hiContrast' : '$muted',

          '&::before, &::after': {
            height: isActive ? '0' : '1px',
          },

          '&:hover': {
            color: isActive ? '$hiContrast' : '$loContrast',
          },
        }}
        href={href}
      >
        {children}
      </Link>
    </ListItem>
  );
};

export const Navbar = () => {
  return (
    <NavbarWrapper css={{ mb: '$16' }}>
      <Link href="/">
        <Logo />
      </Link>
      <NavMenu />
      <ThemeToggleButton />
    </NavbarWrapper>
  );
};
