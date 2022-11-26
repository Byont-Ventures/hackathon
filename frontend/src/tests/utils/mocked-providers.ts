import { getProvider, getWebSocketProvider } from './providers'

/**
 * Mockthereum (https://github.com/httptoolkit/mockthereum) provides us with an
 * ethereum node that we can mock. However, we can only use this package in a
 * Nodejs environment. This is a problem for E2E testing, which is why this is
 * placed in a seperate module.
 */
import * as Mockthereum from 'mockthereum'
export const EthereumMock = Mockthereum.getLocal()

/** Gets a default provider with the mockthereum url */
export const getMockedProvider = (
  ...[chains, chainId]: Omit<Parameters<typeof getProvider>, 'url'>
) => {
  return getProvider(chains, chainId, EthereumMock.url)
}

/** Gets a websocket provider with the mockthereum url */
export const mockedWebsocketProvider = (
  ...[chains, chainId]: Omit<Parameters<typeof getWebSocketProvider>, 'url'>
) => {
  return getWebSocketProvider(chains, chainId, EthereumMock.url)
}
