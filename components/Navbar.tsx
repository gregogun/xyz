import { mauve } from '@radix-ui/colors';
import { SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/dist/client/router';
import { ReactNode, SetStateAction, useEffect, useRef, useState } from 'react';
import { CSS, css, styled } from 'stitches.config';
import { IconButton } from './IconButton';
import { Logo } from './icons';
import { list, List, ListItem } from './Layout';
import { Link } from './Link';
import { motion } from 'framer-motion';
import { navData } from '@/data/nav';

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

const Tabs = () => {
  const [tabBoundingBox, setTabBoundingBox] = useState<any>(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<any>(null);
  const [highlightedTab, setHighlightedTab] = useState<any>(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  const highlightRef = useRef(null);
  const wrapperRef = useRef<any>(null);

  // add proper typings
  const repositionHighlight = (e: any, tab: any) => {
    console.log('function called');

    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles: any = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '150ms';
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return (
    <motion.ul
      variants={item}
      className={list({
        css: { display: 'flex', gap: '$2', position: 'relative' },
      })}
    >
      <TabsNav ref={wrapperRef} onMouseLeave={resetHighlight}>
        <TabsHighlight
          ref={highlightRef}
          css={{
            transitionDuration: highlightStyles.transitionDuration,
            opacity: highlightStyles.opacity,
            width: highlightStyles.width,
            transform: highlightStyles.transform,
          }}
        />
        {navData.map((tab) => (
          <NavMenuItem
            href={tab.value}
            css={{
              padding: '16px 12px',
              display: 'inline-block',
              position: 'relative',
              cursor: 'pointer',
              transition: 'color 250ms',
            }}
            key={tab.value}
            onMouseOver={(ev: MouseEvent) => repositionHighlight(ev, tab)}
          >
            {tab.title}
          </NavMenuItem>
        ))}
      </TabsNav>
    </motion.ul>
  );
};

const nav = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const TabsNav = styled('li', {
  display: 'flex',
  gap: '$2',
  position: 'relative',
});

const TabsHighlight = styled('div', {
  gap: '$2',
  borderRadius: '$sm',
  background: '$elementBg',
  position: 'absolute',
  top: '7px',
  left: 0,
  height: '32px',
  transition: '0.15s ease',
  transitionProperty: 'width, transform, opacity',
});

interface NavMenuItemProps {
  children: string;
  href: string;
  css?: CSS;
  onMouseOver: any;
}

const NavMenuItem = ({ children, href, css, ...props }: NavMenuItemProps) => {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Link
      {...props}
      variant="ghost"
      css={{
        '@bp1': {
          display: 'none',
        },
        '@bp2': {
          display: 'block',
        },
        padding: '$2',
        color: isActive ? '$hiContrast' : '$muted',
        transitionDuration: '500ms',

        '&::before, &::after': {
          height: isActive ? '0' : '1px',
        },

        '&:hover': {
          color: isActive ? '$hiContrast' : '$loContrast',
        },
        ...css,
      }}
      href={href}
    >
      {children}
    </Link>
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
      className={nav({
        css: {
          '@bp1': {
            mb: '$4',
          },
          '@bp2': {
            mb: '$16',
          },
        },
      })}
    >
      <motion.div variants={item}>
        <Link href="/">
          <Logo />
        </Link>
      </motion.div>
      <Tabs />
      <motion.div variants={item}>
        <ThemeToggleButton />
      </motion.div>
    </motion.nav>
  );
};
