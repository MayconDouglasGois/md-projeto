import Document from "next/document"
import { Html, Head,Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
      return(
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>

        </Html>
      )
  }
    
}
