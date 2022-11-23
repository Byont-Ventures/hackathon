# Frontend Challenges

These challenges provide a way to get started with Web3 frontend development. To help you get started, we have included a well-tested Web3 Template in the [src](./src/) folder.

We built this frontend on [React](https://reactjs.org/docs/getting-started.html) with [NextJS](https://nextjs.org/). It also includes the [Wagmi](https://wagmi.sh/docs/getting-started) library. Wagmi has over 20 hooks that will make connecting your frontend to the blockchain easier. We are using [Tailwind CSS](https://tailwindcss.com/docs/installation) for styling.

The goal is to build a full-fletched NFT minting Dapp! If you don't know what this means, don't worry, it will all become clear.

## Challenge 1 - Running the Dapp

Let's begin with an easy challenge, running the [Dapp](https://ethereum.org/en/developers/docs/dapps/).

`yarn run fe:dev`

If you [open the Dapp](http://localhost:3000), You will see a welcome message and links to the respective challenge pages. Feel free to edit this Dapp according to your needs in further challenges.

### Wagmi

Wagmi is a collection of React hooks that makes it easier to connect to Ethereum. Under the hood, it uses [Ethers](https://docs.ethers.io/v5/) to connect to the blockchain.

You can make these connections using [Ethereum RPC Nodes](https://help.coinbase.com/en/coinbase/getting-started/crypto-education/glossary/rpc-node), but using them yourself is not necessary for the scope of this Workshop. There are plenty of RPC node providers, such as Infura and Alchemy. Crypto wallets such as Metamask also have a provider you can use, although that requires the user's wallet to be connected to your Dapp already.

For the Workshop, we will be using Alchemy and have already configured the Alchemy provider with an API key in the [Wagmi configuration](./src/libs/wagmi.ts).

In the Wagmi configuration, you can see three networks:

- localhost => Local blockchain. You would create one by running `anvil` if you installed Foundry.
- Goerli => Goerli test network.
- Mainnet => The main Ethereum network with the "real" Ethereum.

You can add a network here if you ever need to add it.

## Challenge 2

- Implement Rainbowkit [wallet connect button](https://www.rainbowkit.com/docs/connect-button)
- If public alchemy doesn't work i.e. can't connect to network error -> get own API key
- Check they are running anvil if localhost
- If localhost switch doesn't work using button then switch in wallet

## Challenge 3

- Explain ABI / where to get it from
- Implement Wagmi + ABI

## Challenge 4

- Explain mocketh vs anvil
- How to write tests (using mocketh)

## Challenge 5

- Display images from NFT smart contract (testnet)

## Challenge 6

- Build minting UI
- Mint couple of NFTs
- Display minted NFTs from smart contract (testnet)
