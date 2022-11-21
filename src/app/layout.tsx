'use client'

import 'src/styles/globals.css'

import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { WagmiConfig } from 'wagmi'

import { Inter } from '@next/font/google'

import { SkipToMain } from '@/components/SkipToMain'
import { Text } from '@/components/Text'
import { client } from '@/libs/wagmi'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter()

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={classNames(inter.className, 'overflow-x-hidden antialiased')}
      >
        <WagmiConfig client={client}>
          <SkipToMain />
          <main
            data-testid="Layout"
            id="maincontent"
            className={
              'relative flex flex-col flex-grow mt-4 mb-8 space-y-8 md:space-y-16 md:mt-8 md:mb-16'
            }
          >
            {children}
            {`Chain ID: ${client.provider._network.chainId}`}
          </main>
          <footer>
            <Text>Byont Ventures B.V. © {new Date().getFullYear()}</Text>
          </footer>
        </WagmiConfig>
      </body>
    </html>
  )
}

export default RootLayout
