import { providers } from 'ethers'
import { Chain, allChains, chain as chainLookup } from 'wagmi'

export interface ProviderProps {
  chains?: Chain[]
  chainId?: number
  url?: string
}

export class EthersProviderWrapper extends providers.StaticJsonRpcProvider {
  toJSON() {
    return `<Provider network={${this.network.chainId}} />`
  }
}

export class EthersWebSocketProviderWrapper extends providers.WebSocketProvider {
  toJSON() {
    return `<WebSocketProvider network={${this.network.chainId}} />`
  }
}

export const getProvider = (
  chains = allChains,
  chainId = chainLookup.foundry.id,
  url = chainLookup.foundry.rpcUrls.default
) => {
  const chain = allChains.find((x) => x.id === chainId) ?? chainLookup.foundry

  const provider = new EthersProviderWrapper(url, getNetwork(chain))
  provider.pollingInterval = 1_000
  return Object.assign(provider, { chains })
}

/** Gets a websocket provider based on a chain id in a list of chains. */
export const getWebSocketProvider = (
  chains = allChains,
  chainId = chainLookup.foundry.id,
  url = chainLookup.foundry.rpcUrls.default
) => {
  // Find the first matching chain by chainId
  const chain = allChains.find((x) => x.id === chainId) ?? chainLookup.foundry

  const provider = new EthersWebSocketProviderWrapper(
    url.replace('http', 'ws'),
    getNetwork(chain)
  )
  const webSocketProvider = Object.assign(provider, { chains })
  // Clean up WebSocketProvider immediately
  // so handle doesn't stay open in test environment
  webSocketProvider?.destroy().catch(() => {
    return
  })

  return webSocketProvider
}

const getNetwork = (chain: Chain) => {
  return {
    chainId: chain.id,
    ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    name: chain.name,
  }
}
