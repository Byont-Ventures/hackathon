# Frontend Challenges

These challenges provide a way to get started with web3 frontend development. The goal is to build an NFT minting Dapp that interacts with the blockchain and IPFS to min and view NFTs. Initially, we'll provide some boilerplate code, but you'll quickly be left to build new pages.

- [Frontend Challenges](#frontend-challenges)
  - [Challenge 1 - Let's get started! Running the Dapp 🔥](#challenge-1---lets-get-started-running-the-dapp-)
    - [Ethers.js](#ethersjs)
  - [Challenge 2 - Adding abstractions 🪄](#challenge-2---adding-abstractions-)
  - [Challenge 3 - Using Wagmi 📚](#challenge-3---using-wagmi-)
    - [ABIs](#abis)
  - [Challenge 4 - Displaying NFTs 🎨](#challenge-4---displaying-nfts-)
    - [Big Numbers](#big-numbers)
  - [Challenge 5 - Minting 🪙](#challenge-5---minting-)
    - [What is minting?](#what-is-minting)
    - [NFT standards](#nft-standards)
  - [Challenge 6 - It's up to you... 😼](#challenge-6---its-up-to-you-)
  - [Common errors](#common-errors)
    - [Cannot connect to network error](#cannot-connect-to-network-error)
    - [Hydration error](#hydration-error)

## Challenge 1 - Let's get started! Running the Dapp 🔥

You can run the [Dapp](https://ethereum.org/en/developers/docs/dapps/) locally by running `yarn dev` and navigate to the first challenge by going to [http://localhost:3000/challenge-1](http://localhost:3000/challenge-1).

However, you'll be immediately greeted with the following error: `❗️ Error: could not detect network (event="noNetwork", code=NETWORK_ERROR, version=providers/5.7.2) ❗️ `. You got this error because the Dapp is trying to connect to the blockchain but still needs to set it up. Let's fix that!

You can connect to a blockchain node using [Ethereum RPC Nodes](https://help.coinbase.com/en/coinbase/getting-started/crypto-education/glossary/rpc-node). These use the [JSON-RPC](https://www.jsonrpc.org/specification) protocol to communicate with the blockchain. An RPC call might look something like this:

```json
{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": ["0x407d73d8a49eeb85d32cf465507dd71d507100c1", "latest"],
  "id": 1
}
```

There are many public RPC node providers, some cost money, and some are free. We will be using [Alchemy](https://www.alchemy.com/) for this workshop. Alchemy provides a free developer account with 10,000 requests and 100 transactions per day. You can sign up for a free account [here](https://www.alchemy.com/). Crypto wallets such as Metamask also have a provider you can use, although that requires the user's wallet to be connected to your Dapp already; we'll get to that later.

You can obtain your Alchemy API key from the [Alchemy Dashboard](https://dashboard.alchemyapi.io/). Once you have your API key, you can paste it into the `.env.local` file:

- Create an account/sign in
- Create a new app
- Select the `Goerli` network.
- Click on `View Key`
- Replace the `NEXT_PUBLIC_ALCHEMY_API_KEY` in [.env.local](.env.local) with your API key.

```sh
cp .env.example .env.local
```

If you refresh the page you'll now find the latest block number. Feel free to edit this Dapp according to your needs in further challenges.

🎉🎉🎉 **Congratulations! You've successfully connected to the blockchain!** 🎉🎉🎉

### Ethers.js

We can implement all RPCs, errors, hashing, and signing ourselves, but luckily, some libraries do this for us. We are using [ethers.js](https://docs.ethers.io/v5/) for this. Ethers.js is a library that provides a complete Ethereum development environment. It is a collection of packages that allow you to interact with the Ethereum blockchain, including wallets, providers, contracts, and more.

> **Note**: If you're looking for a nice introduction to Ethers.js, check out [this article](https://dev.to/yakult/a-beginers-guide-four-ways-to-play-with-ethersjs-354a).

## Challenge 2 - Adding abstractions 🪄

Nowadays, React developers have switched to [React Query](https://tanstack.com/query/v4/docs/adapters/react-query)/[SWR](https://swr.vercel.app/) for fetching and caching data in combination with React's Context API. Using those tools, developers no longer need more complex state management solutions like [Redux](https://redux.js.org/) and [Zustand](https://github.com/pmndrs/zustand), for the most part.

> **Note**: Read the full documentation of [React Query](https://react-query.tanstack.com/overview) and [SWR](https://swr.vercel.app/docs/getting-started) to learn more about how to use them.

Using one of these tools, we can abstract away the complexity of fetching data. It will also make our code more readable and easier to maintain, and it will also make it easier to add new features. For example:

```ts
// A custom hook that fetches the name of an ERC721 token from the blockchain
const useName = (
  provider: ethers.providers.BaseProvider // You got this working in the previous challenge
) => {
  // Future challenges will use React Query
  return useQuery(['useName', contractAddress], async () => {
    const contract = new ethers.Contract(
      '0xb4595c3f0844cb566c0Df9fea7462A4C413c57FC', // This is the contract address for Fake Bored Ape Yacht Club 
      ['function name() view returns (string)'], // This is the ABI, we'll get to that later
      provider
    );

    // This is how you call a function on a smart contract using ethers.js, find out more here: https://docs.ethers.io/v5/api/contract/contract/#Contract-call.
    return await contract.name();
  });
};

// Example usage
const { data, isError, isLoading } = useName(...args);
```

> **Note**: If you don't know what ERC721 is, read the section in the [Preparation Guide](/PREPARATION.md#what-are-nfts-and-how-do-they-work).

Now, it's up to you to implement this hook into the challenge 2 page.

## Challenge 3 - Using Wagmi 📚

Instead of writing these hooks ourselves for every smart contract call, we can use [Wagmi](https://wagmi.sh). Wagmi is a collection of React hooks that make it easier to perform these actions. Under the hood, it uses Ethers to connect to the blockchain and React Query for state management. Using Wagmi, we can rewrite the example above as follows:

```ts
const { data, isError, isLoading } = useContractRead({
  address: contractAddress,
  abi: contractAbi,
  functionName: 'name',
});
```

> **Note**: As you can see we don't have to take care of the provider, and on top of this Wagmi provides supports end-to-end type safety for all smart contract calls.

### ABIs

You might have noticed that we had to pass the contract ABI to the `useContractRead` hook. The contract `Application Binary Interface` (`ABI`) is the standard way to interact with contracts in the Ethereum ecosystem from outside the blockchain and for contract-to-contract interaction. Using the ABI, data is encoded to a binary sequence according to its type. The encoding is not self-describing and thus requires a JSON schema to decode, similar to how Protobufs work.

Nowadays, many tools automatically generate the ABI whenever you compile your smart contract (as a backend engineer). As a frontend engineer, you must import the generated ABI into your code to interact with smart contracts. Developers usually place the ABI in a folder called [`abis`](/frontend/src/abis/).

You can find the ABI of a smart contract on [Etherscan](https://etherscan.io/). For example, you can find the ABI of the [WETH](https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#code) contract [here](https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#code). If you are interacting with a smart contract that you didn't compile - for example, someone else's smart contract on the blockchain - you can (usually) still get the ABI by going to [Etherscan](https://etherscan.io/).

> **Note**: If you want to learn more about ABIs, check out [this article](https://medium.com/coinmonks/what-is-an-abi-and-why-do-you-need-it-9f6b8b8b0b7).

If you paste a contract address in the top right search bar on Etherscan, you will land on the smart contract page, and you will be able to see all kinds of data and even interact with the smart contract by connecting your wallet.

This is how we got the ABI for the Bored Ape Yacht Club smart contract.

- Go to [Bored Ape Yacht Club on Etherscan](https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d);
- Click on `Contract`;
- At the `Contract ABI` section below, on the right, click on `Copy ABI to clipboard`;
- Create a new file called `BAYCAbi.ts`, and paste the ABI there;
- At the bottom, use const assertion (`as const`) to make the ABI readonly. This is so we can infer types from the ABI.

Now it's up to you to implement [Wagmi with the Goerli network](https://wagmi.sh/core/getting-started), and update the challenge 3 page.

> **Note**: The contract address for BAYC is `0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D`

## Challenge 4 - Displaying NFTs 🎨

As on-chain storage is expensive, images are often stored off-chain. So the NFT metadata and images we have to retrieve in this challenge are not on the blockchain but on IPFS.

If you are familiar with [Opensea](https://opensea.io/), you might be wondering: how do they get the NFT images and metadata?

Your smart contract provides a way to tell Opensea which image belongs to which NFT and where it stored the metadata files through a function called `tokenURI()`. Opensea looks for this function in your smart contract and parses the return value.

> **Note**: If you want to learn more about `IPFS`, read the section in the [Preparation Guide](/PREPARATION.md#what-is-ipfs).

With this knowledge, we can continue with challenge 4: display the NFT image and metadata. The goal is to interact with the BAYC smart contract, and:

- Display the `name` of the contract;
- Display the `totalSupply` of the contract;
- Display the name of the NFT with token ID 42;
- Display the image of the NFT with token ID 42.

You can use the `useContractReads` hook to batch multiple smart contract calls.

```ts
const { data, isError, isLoading } = useContractReads({
  contracts: [
    { ...BAYCContractConfig, functionName: 'name' },
    { ...BAYCContractConfig, functionName: 'totalSupply' },
  ],
});
```

> **Note**: See the [Wagmi documentation](https://wagmi.sh/core/hooks/useContractReads) for more information.

> **Note**: There are multiple ways to go about this, but one of the easiest ways is by implementing the [`useNFT`](https://github.com/spectrexyz/use-nft). Another way is to parse the `tokenURI()` value and use `fetch` or `axios` to get the metadata.

### Big Numbers

In Solidity, the maximum value of a `uint256` is `2^256 - 1`. Such a large number is impossible to represent in JavaScript. To solve this problem, we can use the [BigNumber](https://docs.ethers.io/v5/api/utils/bignumber/) class from Ethers. Ethers use this class to represent arbitrarily large integers and add type annotations automatically when calling the `totalSupply` of the BAYC contract.

```ts
// Most numbers you pass to a smart contract, need to be converted to a BigNumber, for example:
import { BigNumber } from 'ethers';
const aBigNumber = BigNumber.from(42);
const aBiggerNumber = aBignumber.mul(2);
```

## Challenge 5 - Minting 🪙

Now that we know how to get the NFT data to display, let's mint some NFTs! We have already deployed a smart contract on the Goerli testnet: `https://goerli.etherscan.io/address/0x7e7cfcfe861ea8bc27afa0018fa2f3c3140393cd`. This contract is a simple ERC721 contract that allows anyone to mint an NFT.

The goal of this challenge is to mint an NFT using the `mint()` function of the smart contract. The `mint()` function takes a single parameter: the address of the owner of the NFT. The owner of the NFT is the address that will receive the NFT.

Until now, we have only been reading data from the blockchain. Now it's time to write data to the blockchain. To do so, we need to connect our wallet to the application. Using [RainbowKit](https://www.rainbowkit.com/docs/introduction), an [abstraction](https://youtu.be/DKce4wCe2zI) around Wagmi, we can connect almost any wallet we want.

Now it's up to you to:

- Implement RainbowKit in the application;
- Build a form that takes a user input for the mint amount
- Create a mint button
- Switch to the Goerli testnet
- `mint` a couple of NFTs
- Display the current amount minted => `totalSUpply`
- Display the max amount that can be minted => `maxSupply`

> **Note**: You can take a look [here](https://github.com/rainbow-me/rainbowkit/tree/main/examples/with-next-mint-nft) for an example on how to use Wagmi and RainbowKit to create a minting page.

### What is minting?

Minting is the core of getting tokens out there on the blockchain. NFTs are Non-Fungible Tokens, and people must mint them. In the past, these functions required a lot of [gas](https://cryptomarketpool.com/gas-in-solidity-smart-contracts), but developers are creating more and more standards to make minting cost less Eth, such as ERC721A, ERC721Psi.

As you might have noticed, NFTs have a token id. When you deploy a fresh collection, the convention is to have the token ID start at 0 or 1. Then, every time someone mints an NFT, the token id increases and gets assigned to the minted NFT.

### NFT standards

[OpenZeppelin](https://docs.openzeppelin.com/) provides free, standardized, and thoroughly tested/audited smart contract libraries that implement ERC specifications, such as ERC721.

> **Note**: OpenZeppelin is a very popular library, and it is used by many smart contract developers. It is also a very good library to use, but it is not the only one. There are many other libraries out there, and you can even write your own.

ERC721 is the primary standard for NFT smart contracts; see [Workshop Preparaton](/PREPARATION.md#what-are-nfts-and-how-do-they-work). There are variants, such as ERC1155 by Enjin and ERC721A by Azuki, each with its functionalities. For the workshop, ERC721 NFTs will suffice.

Some standard functions that can often be found in an ERC721 contract:

- `tokenURI(uint256 _id)` => Get the token URI for a given token ID (number)
- `totalSupply()` => Get the amount of minted NFTs so far
- `balanceOf(address _owner)` => Get the amount of NFTs owned by an address
- `ownerOf(uint256 _id)` => Get the owner of a given token ID
- `transferFrom(address _from, address _to, uint256 _id)` => Transfer a token from one address to another
- and more ...

See also:

- https://eips.ethereum.org/EIPS/eip-721
- https://docs.openzeppelin.com/contracts/4.x/
- https://docs.openzeppelin.com/contracts/4.x/api/token/erc721

## Challenge 6 - It's up to you... 😼

Once you have minted your NFTs, you should be able to view them on Opensea!

- Let's head over to the [Testnet Opensea](https://testnets.opensea.io/assets?search[chains][0]=GOERLI&search[query]=0x5b0f9a441246ac78d34c70cdd16d5377343d55de&search[resultModel]=ASSETS);
- In the search bar, paste the contract address: `0x5b0f9a441246ac78d34c70cdd16d5377343d55de`;
- Your NFTs should appear in this list!

If you have managed to make it this far, **pat yourself on the back, you've earned it!** Of course, these challenges were just the tip of the iceberg. You can implement more functionality to your NFTs such as a marketplace, a voting system, or even a game!

Now that you have a basic understanding of how to interact with smart contracts, it's up to you to create something cool! You can use the [OpenSea API](https://docs.opensea.io/reference/retrieving-asset-data) to get NFT data, or you can use the [Etherscan API](https://etherscan.io/apis) to get data from the blockchain.

**Next up:** Stretch challenges. During the workshop, we will supply you with a non-exhaustive list of stretch challenges you can work on to refine your skills from here on or work on an idea of your own. You can also take a look at the [backend challenges](/backend/README.md).

🎉🎉🎉 **You have completed the Frontend Coding Challenges!!!** 🎉🎉🎉

## Common errors

### Cannot connect to network error

If you experience "cannot connect to network" errors, you can try the following steps:

- You might be getting rate limited. In that case, please create an [Alchemy account](https://dashboard.alchemy.com/) or sign up and create an app (it's free). Select the network you want to use, and replace the `NEXT_PUBLIC_ALCHEMY_API_KEY` in [.env.local](.env.local) with your API key.
- If you are trying to connect to localhost:8545, make sure you are running `anvil` in a second terminal
- Check that you are on the right network - if you cannot switch from localhost to another network using the connect button, please switch manually inside your wallet

### Hydration error

There is an official issue on this error [here](https://github.com/wagmi-dev/wagmi/issues/542#issuecomment-1144178142) that explains why this error occurs. We have included a hook you can use to mitigate this error. There is also a more in-depth article on Medium [here](https://codingwithmanny.medium.com/understanding-hydration-errors-in-nextjs-13-with-a-web3-wallet-connection-8155c340fbd5).

```tsx
import { useIsMounted } from '@/app/hooks/useIsMounted';

// ...
const balance = useBalance();
const isMounted = useIsMounted();

return <p>{isMounted && balance ? balance : 'Loading...'}</p>;
```

Or you can use the `ClientOnly` component:

```tsx
import { ClientOnly } from '@/components/ClientOnly';

return <ClientOnly>{balance ? balance : 'Loading...'}</ClientOnly>;
```
