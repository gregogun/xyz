import '../styles/globals.css';
import { darkTheme } from '../stitches.config';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Container } from '@/components/Container';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="system"
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <Container>
        {/* <AnimatePresence exitBeforeEnter> */}
        <Component {...pageProps} />
        {/* </AnimatePresence> */}
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
