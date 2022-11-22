import 'src/styles/globals.css'

import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { WagmiConfig } from 'wagmi'

import { client } from 'src/libs/wagmi'
import { SkipToMain } from '@/components/SkipToMain'

import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter()

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <DefaultSeo
        defaultTitle={process.env.NEXT_PUBLIC_APP_NAME}
        titleTemplate={`%s | ${process.env.NEXT_PUBLIC_APP_NAME}`}
        canonical={process.env.NEXT_PUBLIC_APP_URL}
      />
      <WagmiConfig client={client}>
          <div className={inter.className}></div>
          <SkipToMain />
          <Component {...pageProps} />
      </WagmiConfig>
    </>
  )
}

export default App
