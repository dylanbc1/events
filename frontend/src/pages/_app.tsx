import '../styles/Home.module.css';
import type { AppProps } from 'next/app';
import { MyContextProvider } from '../components/context/MyContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  );
}

export default MyApp;
