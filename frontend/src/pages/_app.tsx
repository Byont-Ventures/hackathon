import '@rainbow-me/rainbowkit/styles.css'
import 'src/styles/globals.css'

import type { AppProps } from 'next/app'
import { WagmiConfig } from 'wagmi'

import { RainbowKitProvider } from '@rainbow-me/rainbowkit'

import { client, chains } from 'src/libs/wagmi'
import { SkipToMain } from '@/components/SkipToMain'

import { NftProvider } from 'use-nft'
import { getDefaultProvider } from 'ethers'

import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter()

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const provider = getDefaultProvider('homestead')
  return (
    <>
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          <NftProvider fetcher={['ethers', { provider }]}>
            <div className={inter.className}></div>
            <SkipToMain />
            <Component {...pageProps} />
          </NftProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}

export default App
