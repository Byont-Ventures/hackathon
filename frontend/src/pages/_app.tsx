import '@rainbow-me/rainbowkit/styles.css';
import 'src/styles/globals.css';

import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';

import { Layout } from '@/components/Layout/Layout';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Layout fontClass={inter.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
