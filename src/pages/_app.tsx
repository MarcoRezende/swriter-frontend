import type { AppProps } from 'next/app';
import { Navbar } from '../components/Nabvar';
import AppProvider from '../context';
import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      {/* <Navbar /> */}
      <GlobalStyles />
    </AppProvider>
  );
}
export default MyApp;
