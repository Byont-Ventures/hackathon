# Frontend Challenges

These challenges provide a way to get started with Web3 frontend development. To help you get started, we have included a well-tested Web3 Template in the [src](./src/) folder.

The frontend is built on [React](https://reactjs.org/docs/getting-started.html) with [NextJS 13](https://nextjs.org/blog/next-13#new-app-directory-beta), so we will make use of the [app directory](./src/app/) for our pages. It also includes the [Wagmi](https://wagmi.sh/docs/getting-started) library. Wagmi has over 20 hooks that will make connecting your frontend to the blockchain easier. We are using [Tailwind CSS](https://tailwindcss.com/docs/installation) for styling.

The goal is to eventually build a full-fletched NFT minting Dapp! If you don't know what this means, don't worry, it will all become clear.

## Challenge 1 - Running the Dapp

If you do not know what a Dapp is, we recommend you read [this section](https://ethereum.org/en/developers/docs/dapps/).

Let's begin with an easy challenge, running the Dapp.

`yarn run fe:dev`

You will see a welcome message, a chain id with a number below and a footer.
This is a server side page `page.tsx` that is passed as a child to the root layout `layout.tsx`. The number you see is some data. In this case: the chain ID of the currently connected chain. This data is being provided by the Wagmi client context provider.

Feel free to edit this Dapp according to your needs. For example, you can remove the chain ID message.

### Ethereum Networks / Chains, Wagmi, Ethers

Smart contracts can be seen as part of the backend code for Dapps. The larger portion of users, however, will interact with Dapps through the frontend. Therefore, the frontend must have a way to connect to the backend, or the smart contracts.

For this to work, we initially have to know where the smart contracts are deployed. This can generally be in three distinct places:

- Locally
- On a testing network (testnet), such as Sepolia or Goerli
- On the main network (mainnet)

Documentation on Ethereum networks can be found [here](https://ethereum.org/en/developers/docs/networks/).

Each network has its own Chain ID. More on chain ID's [here](https://chainlist.org/).

Earlier we talked about Wagmi. Wagmi is a collection of React hooks that makes it easier to connect to Ethereum. Under the hood, it uses [Ethers](https://docs.ethers.io/v5/) to make the connections. 

These connections are generally done by using [Ethereum RPC Nodes](https://moralis.io/ethereum-rpc-nodes-what-they-are-and-why-you-shouldnt-use-them/), but using them yourself is not necessary for the scope of this Workshop. There are plenty of RPC node providers out there, such as Moralis, Infura and Alchemy. Crypto wallets such as Metamask also have their own provider that you can use, although that requires the wallet of the user to be connected to your Dapp already.

For the workshop, we will be using Alchemy and have already configured the Alchemy provider with an API key in the [Wagmi configuration](./src/libs/wagmi.ts).
