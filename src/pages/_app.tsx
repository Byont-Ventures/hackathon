import 'src/styles/globals.css'

import type { AppProps } from 'next/app'
import { WagmiConfig } from 'wagmi'

import { client } from 'src/libs/wagmi'
import { SkipToMain } from '@/components/SkipToMain'

import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter()

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <WagmiConfig client={client}>
        <div className={inter.className}></div>
        <SkipToMain />
        <Component {...pageProps} />
      </WagmiConfig>
    </>
  )
}

export default App
