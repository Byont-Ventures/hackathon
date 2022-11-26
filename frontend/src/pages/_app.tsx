import '@rainbow-me/rainbowkit/styles.css';
import 'src/styles/globals.css';

import { WagmiConfig } from 'wagmi';
import type { AppProps } from 'next/app';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Inter } from '@next/font/google';
import { Layout } from '@/components/Layout/Layout';

import { client, chains } from 'src/libs/wagmi';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          <Layout fontClass={inter.className}>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
};

export default App;
