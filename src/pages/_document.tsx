import { ERROR_FRAME_ID, ILIA_KOTOV_ROOT } from 'layout/contributors/Ilia_Kotov/cookbook/constants';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  path = '';

  static override async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    console.log(ctx.pathname);
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  override render(): JSX.Element {
    const { __NEXT_DATA__: { page = undefined } = {} } = this.props || {};
    const hasErrorFrame = page?.startsWith(ILIA_KOTOV_ROOT);
    return (
      <Html>
        <Head />
        <body>
          {hasErrorFrame && <div id={ERROR_FRAME_ID}></div>}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
