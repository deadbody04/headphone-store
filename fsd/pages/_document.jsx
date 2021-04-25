import * as React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles'

class MyDocument extends Document {

  render(){
    return (
      <Html lang="ru">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const materialUiServerStyleSheets = new MaterialUiServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        materialUiServerStyleSheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      materialUiServerStyleSheets.getStyleElement(),
    ],
  }
}

export default MyDocument
