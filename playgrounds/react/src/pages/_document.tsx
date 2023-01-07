import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ChunkExtractor } from "@loadable/server";
import { setup } from "twind";
import { asyncVirtualSheet, getStyleTagProperties } from "twind/server";
import { createElement } from "react";
import path from "path";
import twindConfig from "../twind.config";

const sheet = asyncVirtualSheet();
setup({ ...twindConfig, sheet });

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    sheet.reset();
    const initialProps = await Document.getInitialProps(ctx);
    const { id, textContent } = getStyleTagProperties(sheet);

    const styleProps = {
      id,
      key: id,
      dangerouslySetInnerHTML: {
        __html: textContent,
      },
    };

    return {
      ...initialProps,

      styles: [initialProps.styles, createElement(`style`, styleProps)],
    };
  }

  render() {
    const statsFile = path.resolve(".next/loadable-stats.json");

    const chunkExtractor = new ChunkExtractor({
      statsFile,
    });

    return chunkExtractor.collectChunks(
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
