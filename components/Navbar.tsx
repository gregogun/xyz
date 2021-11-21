import { Cross1Icon, HamburgerMenuIcon, SunIcon } from '@radix-ui/react-icons';
import { css } from 'stitches.config';
import { IconButton } from './IconButton';
import { Logo } from './icons';
import { Link } from './Link';
import { motion } from 'framer-motion';
import useMediaQuery from '@/utils/hooks/useMediaQuery';
import { Tabs } from './Tabs';
import { style } from '@/styles/style';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const MenuButton = ({ clicked, toggleClicked, ...props }: any) => {
  const handleClick = () => {
    toggleClicked();
  };

  return (
    <IconButton css={{ position: 'relative' }} onClick={handleClick} {...props}>
      {clicked ? <Cross1Icon /> : <HamburgerMenuIcon />}
    </IconButton>
  );
};

export const ThemeToggleButton = ({ ...props }) => {
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
      <SunIcon className={style({ css: { width: '$4', height: '$4' } })} />
    </IconButton>
  );
};

const nav = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

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

export const Navbar = ({ clicked, toggleClicked }: any) => {
  const isMobile: boolean = useMediaQuery('(max-width: 767px)');
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
        {isMobile ? (
          <MenuButton clicked={clicked} toggleClicked={toggleClicked} />
        ) : (
          <ThemeToggleButton />
        )}
      </motion.div>
    </motion.nav>
  );
};
