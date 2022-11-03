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

export const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})

export { defaultChains as chains }
