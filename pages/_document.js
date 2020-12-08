import Document, { Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="My Assessment Test React App with Next js"/>
          <meta name="keywords" content="next react seo" />
          <meta name="author" content="jegathis pandian" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
          <link rel="stylesheet" href="/static/styles.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:400"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;