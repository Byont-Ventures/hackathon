# Frontend Challenges

These challenges provide a way to get started with Web3 frontend development. To help you get started, we have included a well-tested Web3 Template in the [src](./src/) folder.

We built this frontend on [React](https://reactjs.org/docs/getting-started.html) with [NextJS](https://nextjs.org/). It also includes the [Wagmi](https://wagmi.sh/docs/getting-started) library. Wagmi has over 20 hooks that will make connecting your frontend to the blockchain easier. We are using [Tailwind CSS](https://tailwindcss.com/docs/installation) and [RainbowKit](https://www.rainbowkit.com/docs/introduction) for styling. RainbowKit also provides easy wallet connection functionality. At last, we have implemented the [useNFT()](https://github.com/spectrexyz/use-nft) hook by Spectre that allows you to quickly retrieve NFT metadata.

The goal is to build a full-fletched NFT minting Dapp! Such a Dapp will drastically improve the user experience (connecting to the blockchain, minting NFTs, viewing NFTs). If you don't know what this means, don't worry, it will all become clear.

## Common errors

Before we begin, we have included some common errors and solutions that you could try. Please refer to this section if you are experiencing these errors.

### Cannot connect to network error

If you experience "cannot connect to network" errors, try the following and see if they are resolved:

- You might be getting rate limited. In that case, please create an [Alchemy account](https://dashboard.alchemy.com/) or sign up, and create an app (it's free). Select the network that you would like to use, and replace the `NEXT_PUBLIC_ALCHEMY_API_KEY` in [.env.local](.env.local) with your own API key.
- If you are trying to connect to localhost:8545, make sure you are running `anvil` in a second terminal
- Check that you are on the right network - if cannot switch from localhost to another network using the connect button, please switch manually inside your wallet

### Hydration error

There is an official issue on this error [here](https://github.com/wagmi-dev/wagmi/issues/542#issuecomment-1144178142) that explains why this error occurs.

We have included a hook you can use to mitigate this error.
`import { useIsMounted } from 'src/hooks/useIsMounted'`
`const isMounted = useIsMounted()`

Then, in your `JSX`:
`{isMounted && yourDataHere}`

## Challenge 1 - Let's get started! Running the Dapp

Let's begin with an easy challenge, running the [Dapp](https://ethereum.org/en/developers/docs/dapps/).

- Create `.env.local` in the root folder, copy and paste the contents of `.env.example` in there
- We recommend you create an [Alchemy account](https://dashboard.alchemy.com/) to prevent rate limiting by replacing the default public API key of this project with your own:
  1. Create an account / sign in
  2. Create a new app
  3. Select the `Goerli` network.
  4. Click on `View Key`
  5. Replace the `NEXT_PUBLIC_ALCHEMY_API_KEY` in [.env.local](.env.local) with your own API key.
- `yarn run fe:dev`

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

## Challenge 2 - Wallet connect button

As mentioned earlier, users can connect their wallets to your Dapp. They can then interact with the blockchain through the Dapp, using their wallet.

We have already configured [RainbowKit](https://www.rainbowkit.com/docs/introduction), a nice library, in [\_app.tsx](./src/pages/_app.tsx).

The goal of this challenge is to:

- Include a [wallet connect button](https://www.rainbowkit.com/docs/connect-button) using RainbowKit
- Connect your wallet
- Show your wallets balance

<spoiler>
  <summary>HINT:</summary>
  <details>
    You can make use of the <code>useAccount()</code> <a href="https://wagmi.sh/docs/hooks/useAccount">(docs here)</a> and <code>useBalance()</code> <a href="https://wagmi.sh/react/hooks/useBalance">(docs here)</a>hooks from Wagmi. If you are still stuck, you could always look into the files of the next challenge to see how we have implemented it.
    <br>
    If you are experiencing the hydration error, please refer to our hydration errors section.
  </details>
</spoiler>

## Challenge 3.A - Understanding and implementing ABIs

The goal of this challenge is to:

- Learn how to implement the Bored Ape Yacht Club (BAYC) ABI

**Note: The contract address for BAYC is `0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D`**

### What is an ABI

The Contract Application Binary Interface (ABI) is the standard way to interact with contracts in the Ethereum ecosystem, both from outside the blockchain and for contract-to-contract interaction. Data is encoded according to its type, as described in this specification. The encoding is not self describing and thus requires a schema in order to decode.

We assume that the interface functions of a contract are strongly typed, known at compilation time and static. We assume that all contracts will have the interface definitions of any contracts they call available at compile-time.

In other words, the ABI shows us which functions are in the contract to which that ABI belongs, and what kind of parameters they take in for example.

Nowadays, the ABI is automatically generated by many tools whenever you compile your smart contract (as a backender). As a frontender, you will have to import the generated ABI in your code, in order to be able to interact with smart contracts. The ABI is usually located in a folder called `abi`, or, in this case, [abis](./src/abis/)

### Getting the ABI through Etherscan

If you are interacting with a smart contract that you didn't compile - for example, a smart contract that is already deployed on the blockchain - you can still get the ABI by going to [Etherscan](https://etherscan.io/).

Etherscan is a block explorer for the Ethereum blockchain. It allows users to search and browse transactions and blocks easily. It also provides information about each transaction and block, such as the hash and timestamp.

The average person doesn't have the time to read through an entire blockchain to find out what's going on.
A block explorer solves this problem by making it easy for people to search and browse the blockchain. They can see all the transactions that have taken place and how much crypto is owned by specific wallet addresses.

You can think of Etherscan as the Google of Ethereum. Just as you would use Google to search the internet, you can use Etherscan to search the Ethereum blockchain.

If you paste a contract address in the top right search bar, you will land on the smart contract page, and you will be able to see all kinds of data and even interact with the smart contract by connecting your wallet.

This is how we got the ABI for the Bored Ape Yacht Club smart contract.

1. Go to [Bored Ape Yacht Club on Etherscan](https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d)
2. Click on `Contract`
3. At the `Contract ABI` section below, on the right, click on `Copy ABI to clipboard`
4. We created a new file called `BAYCAbi.ts`, and pasted the ABI there.
5. At the very bottom, notice we used constant assertion `as const` to make the ABI readonly. This is so we can infer types from the ABI, and ensure the ABI never changes.

### BigNumbers

Any number you pass to a smart contract, has to be converted to a BigNumber, for example:

```javascript
import { BigNumber } from 'ethers'
const aBigNumber = BigNumber.from(42)
```

If you want more information on Big Numbers, and why we are using the Ethers BigNumber object and not for example BigNumber.js, BN.js, BigDecimal, etc., please refer to the Ethers [documentation](https://docs.ethers.io/v5/api/utils/bignumber/).

## Challenge 3.B - Display smart contract data

The goal of this challenge is to:

- Connect wallet to the mainnet through the browser
- Import the BAYC ABI
- Get the `name` of the BAYC smart contract
- Get the `symbol` of the BAYC smart contract

<spoiler>
  <summary>HINT:</summary>
  <details>
    You can make use of the <code>useContractRead()</code> (docs <a href="https://wagmi.sh/react/hooks/useContractRead">here</a>) or <code>useContractReads()</code> (docs <a href="https://wagmi.sh/react/hooks/useContractReads">here</a>) hooks from Wagmi.
  </details>
</spoiler>

## Challenge 4 - Displaying NFTs

Let's display an NFT now! Recall that metadata is often stored on IPFS.

The goal is to interact with the BAYC smart contract, and:

- Display the `name` of the contract
- Display the `symbol` of the contract
- Display the image of the NFT with token ID 42

<spoiler>
  <summary>HINT:</summary>
  <details>
    There are multiple ways to go about this, but one of the easiest ways is one we have included for you:
    <br><br>The <code>useNft()</code> hook. Refer to the docs <a href="https://github.com/spectrexyz/use-nft">here.</a>
  </details>
</spoiler>

### TokenURI

As on-chain storage is expensive, images are often stored off-chain. So the NFT metadata and images we have to retrieve in this challenge, are not actually on the blockchain, but on IPFS instead!

If you are familiar with [Opensea](https://opensea.io/), you might be wondering: how do they get the NFT images and metadata?

Your smart contract provides a way to tell Opensea which image belongs to which NFT and where the metadata files are stored through a function called `tokenURI()`. Opensea looks for this function in your smart contract and parses the return value.

This is also how the library that uses the `useNFT()` hook we implemented works under the hood.

## Challenge 5 - Minting and displaying

Now that we know how to get the NFT data to display, let's mint some NFT's! For that, we have already deployed a smart contract on the Goerli testnet: `0xsomeAddressHere`.

The goal of this challenge is to:

- Build a form that takes on user input for the mint amount
- Create a mint button
- Switch to the Goerli testnet
- `mint` a couple of NFTs
- Display the current amount minted => `totalSUpply`
- Display the max amount that can be minted => `maxSupply`
- Display minted NFTs from smart contract in a grid / gallery

<spoiler>
  <summary>HINT:</summary>
  <details>
    You can take a look <a href="https://github.com/rainbow-me/rainbowkit/tree/main/examples/with-next-mint-nft">here</a> for an example on how to use Wagmi and RainbowKit to create a minting page!
  </details>
</spoiler>
 
### What is minting?

Minting is the core of getting tokens out there on the blockchain. NFTs are Non-Fungible Tokens, and they have to be minted. In the past, these functions required a lot of [gas](https://cryptomarketpool.com/gas-in-solidity-smart-contracts), but more and more standards are being developed to make minting cost less ETH, such as ERC721A, ERC721Psi.

As you might have noticed, NFTs have a token id. When you deploy a fresh collection, the convention is to have the token ID start at 0 or 1. Then, every time an NFT is minted, the token id increases and gets assigned to the minted NFT.

### NFT standards

Depending on your Solidity knowledge, this might not be very useful to you, but it is still a good way to see what functions should be found by default in an NFT smart contract.

Openzeppelin is a company that provides free, standardized, and thoroughly tested/audited smart contract libraries to use, such as ERC721.

ERC721 is a standard for NFT smart contracts. There are others, such as ERC1155 by Enjin and ERC721A by Azuki, each with its functionalities. For the workshop, ERC721 NFTs will suffice.

Some standard functions that can often be found in an ERC721 contract:

- `tokenURI(uint256 _id)` => Get the token URI for a given token ID (number)
- `totalSupply()` => Get the amount of minted NFTs so far

Documentation on Openzeppelin and the ERC721 standard:

- https://eips.ethereum.org/EIPS/eip-721
- https://docs.openzeppelin.com/contracts/4.x/
- https://docs.openzeppelin.com/contracts/4.x/api/token/erc721
