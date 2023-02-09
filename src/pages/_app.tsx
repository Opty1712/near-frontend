import type { AppProps } from 'next/app';
import Head from 'next/head';
import { WalletContextProvider } from '../context';
import '../global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Near frontend app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <WalletContextProvider>
        <Component {...pageProps} />
      </WalletContextProvider>
    </>
  );
};

export default App;
