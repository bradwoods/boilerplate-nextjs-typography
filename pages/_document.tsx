import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { fontFiles } from "../styles/typography.css";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* https://web.dev/preload-optional-fonts/?utm_source=lighthouse&utm_medium=devtools */}
          {fontFiles.map((file) => (
            <link as="font" crossOrigin="anonymous" href={file} key={file} rel="preload" />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
