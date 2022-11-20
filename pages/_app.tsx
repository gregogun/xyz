import '../styles/globals.css';
import { darkTheme } from '../stitches.config';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React from 'react';
import '@fontsource/lora/400.css';
import '@fontsource/lora/400-italic.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="dark"
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
