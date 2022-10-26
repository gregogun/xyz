import '../styles/globals.css';
import { darkTheme } from '../stitches.config';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React from 'react';
import { Container } from '@/components/Container';
import useToggle from '@/utils/hooks/useToggle';

function MyApp({ Component, pageProps }: AppProps) {
  const [clicked, toggleClicked] = useToggle();
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="system"
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <Container clicked={clicked} toggleClicked={toggleClicked}>
        <Component
          {...pageProps}
          clicked={clicked}
          toggleClicked={toggleClicked}
        />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
