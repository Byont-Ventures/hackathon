# Web3 Workshop

**This repository is under construction; the coding challenges are expected to be updated regularly**

The first day of the workshop will be about getting your hands dirty in the Web3 space by creating (your first) NFT project! This project will be initially divided into three tracks - Frontend, Backend, and Stretch challenges. This repo will contain just about everything you need to get started on developing your first Web3 Dapp. There are different tracks and general instructions on setting everything up and preparing for the workshop. You do not need to follow any installation steps in the Web3 Template Docs, the file is included for documentation purposes.

You may choose to start with the stretch challenges straight away if you are working in teams. In this case, we recommend giving the challenges of your respective track a try before the workshop.

- [Workshop Preparation](Workshop-Preparation.md)
- [Frontend Challenges WIP](Frontend-Challenges.md) => Build components around given web3 hooks
- [Backend Challenges WIP](Backend-Challenges.md) => Solidity, testing with Foundry
- [Stretch Challenges WIP]() => More advanced
- [Web3 Template Docs](Web3-Template.md) (No extra installation required)

## Coding Challenges

The workshop is a collection of coding challenges to get you warmed up with Web3 development in general. It is not a complete tutorial, as that is too much to learn in one day, but it is an excellent primer to grasp the overall concept. The end goal of this workshop is to enable you to build your own NFT project!(Frontend or backend depending on the track). Remember that sometimes there are multiple ways to get to a solution. We encourage you to look things up online or ask questions if you are lost. We will be sharing helpful resources with you throughout this course.

## What are NFTs and how do they work?

NFTs are Non-Fungible Tokens. To understand what this means, let's take a look at Bitcoin. Every token is the same, every fraction of a Bitcoin is the same in the sense that every cent or dollar is the same. These are fungible tokens. Now NFTs are non-fungible; the opposite. Every NFT is unique.

For more information, there is an excellent article [here](https://ethereum.org/en/nft/) that explains what NFTs are, some examples, and how NFTs work under the hood.

As mentioned in the article, NFTs could for example be digital art. Take a look at an example of a Bored Ape (Bored Ape Yacht Club) [here](https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/9872).

The website that displays the NFT is called Opensea, a marketplace for NFTs. Opensea queries the `tokenURI()` function on the [smart contracts](https://ethereum.org/en/smart-contracts/) to retrieve the metadata of that NFT (if you take a look at the `Properties` section of that NFT on Opensea, you can see different properties such as `Background`, `Clothes` and `Eyes`.) This metadata also includes a link to the image of the ape. For this Bored Ape#9872, the links to the metadata and the image are as such:

metadata => `ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/9872`
image => `ipfs://QmdtEL6yqQgTHLzvxiJk1ojkUzs9NyyK1yd8UCvV6K2xCV`

As you can see, these are special links that won't work in all browsers if you paste them in the browser bar. These links are IPFS URIs.

## What is IPFS?

There is excellent documentation available on IPFS [here](https://docs.ipfs.tech/concepts/what-is-ipfs/).

As mentioned in the docs, IPFS is a peer-to-peer network, a distributed system for storing and accessing files, websites, applications and data. Eventually, files that are not queried anymore get purged from the network. To prevent this, there are multiple pinning services available. (See also: [what is pinning?](https://docs.ipfs.tech/how-to/pin-files/).)

These pinning services run an IPFS node and make sure the files do not get purged. An example of a pinning service is [Pinata](https://www.pinata.cloud/).

If you want an easy way to open an IPFS link, you can go to [ipfsbrowser.com](https://ipfsbrowser.com/) and paste the CID (The hash after the `ipfs://` part). Then, click on `Open Raw File`.

**Note:** Sometimes, metadata and images of NFTs are stored on the smart contracts themselves (on-chain). This is very expensive, though, so that's why usually the images and metadata are stored off-chain.
