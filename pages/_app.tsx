// Import CSS global
import '../public/global.css';

// Import tipe AppProps dari Next.js
import type { AppProps } from 'next/app';

// Import file JavaScript
import '../public/script.js';

// Definisikan fungsi MyApp yang menerima properti AppProps
function MyApp({ Component, pageProps }: AppProps) {
  // Kembalikan komponen utama dengan properti pageProps
  return <Component {...pageProps} />;
}

// Ekspor default dari MyApp
export default MyApp;