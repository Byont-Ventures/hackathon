import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

export const defaultChains = [
  chain.localhost,
  chain.mainnet,
  ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [chain.goerli] : []),
]

const { provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  }),
  publicProvider(),
])

const { connectors } = getDefaultWallets({
  appName: 'Frontend Workshop',
  chains: defaultChains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { defaultChains as chains }
