import '../styles/globals.css';
import { globalCss } from '@stitches/react';
import type { AppProps } from 'next/app';

const globalStyles = globalCss({
  // add globlal styles
  '@import': ['reset.css', 'custom2.css'],
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
