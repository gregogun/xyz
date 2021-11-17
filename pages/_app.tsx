import '../styles/globals.css';
import { darkTheme } from '../stitches.config';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React, { FC } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="system"
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
