# Workshop Preparation

Before jumping into the challenges, we ask you to follow the installation instructions and read the explanations below. This will help you set up your development environment and explain the core concepts of web3. If you have any questions, feel free to ask in the [#workshop](https://discord.com/channels/935159951423340625/1045998823392153600) channel on our [Discord server](https://discord.gg/xF5dtjZH73).

- [Workshop Preparation](#workshop-preparation)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Why NextJS (React)?](#why-nextjs-react)
    - [Why Foundry?](#why-foundry)
  - [Wallets](#wallets)
  - [Testnets](#testnets)
    - [Regular Faucet](#regular-faucet)
    - [Proof of Work Faucet](#proof-of-work-faucet)
    - [Other Faucets](#other-faucets)
  - [What are NFTs and how do they work?](#what-are-nfts-and-how-do-they-work)
    - [Example](#example)
  - [What is IPFS?](#what-is-ipfs)
    - [Example](#example-1)

## Prerequisites

- A unix-like environment (Linux, macOS, [WSL](https://apps.microsoft.com/store/detail/ubuntu-22041-lts/9PN20MSR04DW), etc.);
- [VSCode](https://code.visualstudio.com/) (optional, but recommended), and [WSL for VSCode for Windows users](https://code.visualstudio.com/docs/remote/wsl-tutorial).
- [Node.js](https://nodejs.org/en/) (v14.17.0 or higher);
- [Yarn](https://classic.yarnpkg.com/) (v1.22.10 or higher);
- [Git LFS](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage);
- A free [Alchemy](https://www.alchemy.com/) account.
- A wallet with test Eth (e.g. [Metamask](https://metamask.io/), see the [instructions below](#wallets);

## Installation

```sh
# Install foundry
curl -L https://foundry.paradigm.xyz | bash
foundryup

# Clone the repository
git clone https://github.com/Byont-Ventures/Hackathon.git

# Install both the frontend and backend dependencies
yarn install
```

### Why NextJS (React)?

NextJS and React are simply by far the most used frameworks used in developing front-end applications in Web3. React has the largest community and a lot of different web3 frameworks available, with many solutions to any problems you might encounter.

### Why Foundry?

Foundry is a smart contract development toolchain. Foundry manages your dependencies, compiles your project, runs tests, deploys, and lets you interact with the chain from the command line and via Solidity scripts.

There are other frameworks like [Hardhat]([https://https://hardhat.org/) and [Truffle](https://trufflesuite.com/) if you wish to use them. The main drawbacks here are that you will have to write your tests in Javascript, and you will have to communicate with your smart contracts using libraries. Using Foundry, you can write tests directly in Solidity. Furthermore, you can quickly implement fuzz testing and traces that will give you exact information on what happens during a function call.

To install Foundry, please refer to their excellent [documentation](https://book.getfoundry.sh/getting-started/installation) on how to get started.

> **Tip:** To see if you installed Foundry correctly, type `forge` in your terminal. If the command is not recognized, try it in a new one.

## Wallets

You will need a wallet to interact with the smart contracts. We recommend using [Metamask](https://metamask.io/), a browser extension that allows you to interact with the Ethereum blockchain. You can use this wallet for testing during the workshop. We recommend you keep your development and personal wallet separate; in other words, we recommend you not store real funds on it. Alternatively you can use:

- [Coinbase Wallet](https://www.coinbase.com/wallet);
- [Rainbow Wallet](https://rainbow.me/);
- [Trust Wallet](https://trustwallet.com/);
- Any wallet that supports [WalletConnect](https://explorer.walletconnect.com/?type=wallet&chains=eip155%3A1).

Whichever wallet you choose, at some point, it will ask you to configure a password to unlock your wallet. Your password, however, is **not** the real key to your wallet! Instead, they use a [mnemonic phrase](https://www.coinbase.com/learn/crypto-basics/what-is-a-seed-phrase) to generate your wallet. We recommend you write it down and store it somewhere safe.

> **Note:** If someone has access to your seed phrase, they will be able to access your wallet, all the accounts within it, and, therefore, all the funds. Consequently, it is best to get rid of this wallet after the workshop and create a new one in a more secure environment. Only use this one for testing purposes.

Metamask holds your private key in the browser's data store. A private key is a randomly-generated number that gives a user control over all data and funds linked with the corresponding Ethereum address, which is generated from the Keccak-256 hash of the public key. This includes access to contracts that authorize the address. The private key is used to create signatures proving data or funds' ownership in a transaction. Therefore, never share your private key with anyone, as they can access your account and all the funds!

## Testnets

"Testnets" are Ethereum networks that protocol developers use to test smart contracts in a development or staging environment. They are similar to the mainnet but not connected to it. Because of this, you can test smart contracts and applications without spending real money.

You can run a local testnet using [Anvil](https://book.getfoundry.sh/anvil/#how-to-use-anvil) or use a public testnet like [Goerli](https://goerli.net/#about). During this workshop, you'll also learn how. to deploy a contract to OpenSea, which only supports public testnets, so you should familiarize yourself with that.

> **Tip:** If you are using Metamask, you can switch between networks by clicking on the network name in the top left corner of the extension.

To run a local testnet you can run te following command:

```sh
# https://book.getfoundry.sh/anvil/#how-to-use-anvil
anvil
```

When using a public testnet, you will need to get some test Eth. You can get test Eth for public testnets from a faucet, a website that gives you test Eth for free.

Ethereum has several testnets where you can get free Eth. Of course, this Eth is not transferable to the mainnet, so it is solely for development purposes. We will use the Goerli test network since, at the time of writing, [Opensea](https://opensea.io/), the most used NFT marketplace, uses that.

> **Note:** We recommend that you get at least 0.3 test Eth. At the time of writing, the network is congested, which means transaction fees are high now.

There are generally two ways to get test ETH:

- Regular faucets;
- Mining yourself using PoW (Proof Oof Work) faucets.

> **Note:** if you're having trouble with the Goerli testnet faucet you can try out other testnets that are [supported by OpenSea](https://testnets.opensea.io/). However, if you're still having trouble we have some backup Eth available.

### Regular Faucet

- Go to [Goerli Faucet](https://goerlifaucet.com/) and login with your Alchemy account;
- Open up Metamask, type your password and copy and paste your wallet address into the input field. That tells the faucet, "Hey, send the funds to my address!";
- Click "Send me ETH" and wait for the transaction to be confirmed;
- In Metamask, click on Settings > Advanced > Show test networks. Then, click on "Goerli." Your funds should appear soon!

### Proof of Work Faucet

- Go to https://goerli-faucet.pk910.de/ (or search for Goerli POW faucet)
- Enter your wallet address, and start mining! **Note:** You need to mine for a certain amount of time because there is a minimum claim amount. Make sure you have the minimum claim - amount before you claim your funds.
- When you've obtained enough, click "Stop mining and claim rewards."
- Verify that you are a human, and your funds should appear shortly.

**Tip**: If you have the resources, you can mine faster by increasing the number of workers to the maximum your machine allows.

### Other Faucets

We recommend that you try out other faucets as well, [this site](https://faucetlink.to/goerli) has plenty of faucets you can try out. Some might be down; others might require some verification method, such as a tweet.

## What are NFTs and how do they work?

NFTs are Non-Fungible Tokens. To understand what this means, let's take a look at Bitcoin. Bitcoin is a fungible token. Being fungible means, we are essentially the same if I have one Bitcoin and you have one. If I want to sell you one of my Bitcoins, I can sell you one, and it's the same as selling you any other Bitcoin. These are fungible tokens.

Now NFTs are non-fungible; the opposite. Every NFT is unique. I can sell you one of my NFTs, but that's different from selling you any other NFT. It's the same as selling an item in a model car collection.

For more information, there is an excellent article [here](https://ethereum.org/en/nft/) that explains what NFTs are, some examples, and how NFTs work under the hood.

### Example

As mentioned in the article, NFTs could, for example, be digital art. A website that displays NFTs is called Opensea, a marketplace for NFTs. Opensea queries the `tokenURI()` function on the [smart contracts](https://ethereum.org/en/smart-contracts/) to retrieve the metadata of that NFT.

It can safely do that because there are standard interfaces for common smart contracts called [ERCs](https://eips.ethereum.org/erc). For example, you have ERC20 for fungible and ERC721/ERC1155 for non-fungible tokens.

Take a look at an example of a BAYC (Bored Ape Yacht Club) [on Opensea](https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/9872) and look at the `Properties` section, you can see different properties such as `Background`, `Clothes` and `Eyes`). This metadata also includes a link to the image of the ape. For this Bored Ape#9872, the links to the metadata and the image are as such:

- `metadata` => `ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/9872`
- `image` => `ipfs://QmdtEL6yqQgTHLzvxiJk1ojkUzs9NyyK1yd8UCvV6K2xCV`

As you can see, these are special links that will only work in some browsers if you paste them into the URL bar. These links are IPFS (InterPlanetary File System) URIs.

## What is IPFS?

There is excellent documentation available on IPFS [here](https://docs.ipfs.tech/concepts/what-is-ipfs/).

As mentioned in the docs, IPFS is a peer-to-peer network, a distributed system for storing and accessing files, websites, applications, and data. Eventually, files that become inactive get purged from IPFS. To prevent purging, developers often use a pinning service; see also: [what is pinning?](https://docs.ipfs.tech/how-to/pin-files/).

These pinning services run an IPFS node and make sure the files do not get purged. An example of a pinning service is [Pinata](https://www.pinata.cloud/).

If you want an easy way to open an IPFS link, you can go to [ipfsbrowser](https://ipfsbrowser.com/) and paste the CID ("Content ID"; the hash after the `ipfs://` part). Then, click on `Open Raw File`.

> **Note:** Sometimes, developers store metadata and images of NFTs in the smart contracts themselves (on-chain). Storing data on-chain is [very expensive](https://www.reddit.com/r/ethereum/comments/p929x8/how_to_store_1kb_of_data_in_an_nft_on_the_actual/), so the images and metadata are usually stored off-chain.

### Example

- Go to [ipfsbrowser](https://ipfsbrowser.com/);
- Paste the following into the input field => `bafybeiapyyq2r2jb43qdyq3tzfyiqjxlamzlaa4xm7tfty4nzb6ol5e3sq`;
- Click `Open raw file`;
- If all went well, you should now be viewing the image of a [Bored Ape NFT](https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/2369);

Alternatively, you can follow the [tutorial provided by Cloudflare](https://developers.cloudflare.com/web3/how-to/use-ipfs-gateway/)

If you are using Brave browser, you can paste the IPFS URL directly into the browser: `ipfs://bafybeiapyyq2r2jb43qdyq3tzfyiqjxlamzlaa4xm7tfty4nzb6ol5e3sq`
