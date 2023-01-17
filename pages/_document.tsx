// Basic _documents

// import {
//   Html, Head, Main, NextScript,
// } from 'next/document';

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

// Stitches documents

import React from 'react';

import NextDocument, {
  Html, Head, Main, NextScript,
} from 'next/document';

// Home Page demo
// import { getCssText } from '../core/components/stitchesWebsite/stitches.config';
import { getCssText } from 'stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
