import '../styles/globals.css';
import { globalCss } from '@stitches/react';
import type { AppProps } from 'next/app';

const globalStyles = globalCss({
  h1: {
    fontSize: '8rem',
  },
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
