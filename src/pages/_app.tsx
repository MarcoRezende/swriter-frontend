import type { AppProps } from 'next/app';
import { Navbar } from '../components/Nabvar';
import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Navbar />
      <GlobalStyles />
    </>
  );
}
export default MyApp;
