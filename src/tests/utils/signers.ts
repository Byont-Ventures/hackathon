import { accounts } from './constants'
import { EthersProviderWrapper } from './providers'

import { Wallet, providers } from 'ethers'
import { Provider } from '@wagmi/core'

/**
 * Implements uncheck connection based on [Wagmi's
 * tests](https://github.com/wagmi-dev/wagmi/blob/main/packages/core/test/utils.ts)
 */
export class WalletSigner extends Wallet {
  connectUnchecked(): providers.JsonRpcSigner {
    const uncheckedSigner = (<EthersProviderWrapper>(
      this.provider
    )).getUncheckedSigner(this.address)
    return uncheckedSigner
  }
}

/**
 * Get a list of signers
 *
 * @param provider A mocked (getMockedProivder) or a provider that points to an
 *   [Anvil](https://github.com/foundry-rs/foundry/tree/master/anvil) instance
 * @returns Returns a list of signers based on
 *   [Anvil's](https://github.com/foundry-rs/foundry/tree/master/anvil) default
 *   signer list
 */
export function getSigners(provider: Provider) {
  return accounts.map((x) => new WalletSigner(x.privateKey, provider))
}
