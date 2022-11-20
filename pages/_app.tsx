import '../styles/globals.css';
import { darkTheme } from '../stitches.config';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React from 'react';
import useToggle from '@/utils/hooks/useToggle';
import '@fontsource/lora/400.css';
import '@fontsource/lora/400-italic.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [clicked, toggleClicked] = useToggle();
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="system"
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <Component
        {...pageProps}
        clicked={clicked}
        toggleClicked={toggleClicked}
      />
    </ThemeProvider>
  );
}

export default MyApp;
