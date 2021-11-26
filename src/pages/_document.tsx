import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

import { ERROR_FRAME_ID } from 'layout/contributors/Ilia_Kotov/cookbook/constants';

class MyDocument extends Document {
  static override async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  override render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <div id={ERROR_FRAME_ID}></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
