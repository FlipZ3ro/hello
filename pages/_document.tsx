import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Tidak perlu menyertakan link stylesheet di sini */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Tambahkan link stylesheet di sini menggunakan Document */}
          <link rel="stylesheet" href="/style.css" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;