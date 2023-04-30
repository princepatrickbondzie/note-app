import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="EasyNote is a simple web app for saving short notes."
        />
        <meta name="keywords" content="Notepad EasyNote" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
