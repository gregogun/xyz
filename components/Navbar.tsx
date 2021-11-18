import { mauve } from '@radix-ui/colors';
import { SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/dist/client/router';
import { ReactNode, SetStateAction, useEffect, useState } from 'react';
import { css, styled } from 'stitches.config';
import { IconButton } from './IconButton';
import { Logo } from './icons';
import { list, List, ListItem } from './Layout';
import { Link } from './Link';
import { motion } from 'framer-motion';

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

const nav = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const NavMenu = () => {
  return (
    <motion.ul
      variants={item}
      className={list({ css: { display: 'flex', gap: '$3' } })}
    >
      <NavMenuItem href="/">home</NavMenuItem>
      <NavMenuItem href="/projects">projects</NavMenuItem>
      <NavMenuItem href="/digitalgarden">digital garden</NavMenuItem>
    </motion.ul>
  );
};

interface NavMenuItemProps {
  children: string;
  href: string;
}

const NavMenuItem = ({ children, href }: NavMenuItemProps) => {
  const router = useRouter();

  const isActive = router.pathname === href;

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

const navAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.1,
      delayChildren: 0.2,
      staggerChildren: 0.1,
      duration: 0.6,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const Navbar = () => {
  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={navAnim}
      className={nav({ css: { mb: '$16' } })}
    >
      <motion.div variants={item}>
        <Link href="/">
          <Logo />
        </Link>
      </motion.div>
      <NavMenu />
      <motion.div variants={item}>
        <ThemeToggleButton />
      </motion.div>
    </motion.nav>
  );
};
