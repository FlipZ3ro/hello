import '../public/global.css'; // Sesuaikan dengan jalur file CSS global Anda
import type { AppProps } from 'next/app'; // Import tipe AppProps dari 'next/app'
import '../public/script.js'; // Tambahkan impor file JavaScript Anda di sini

function MyApp({ Component, pageProps }: AppProps) { // Menggunakan tipe AppProps untuk menentukan tipe dari props
  return <Component {...pageProps} />;
}

export default MyApp;