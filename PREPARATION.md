# Workshop preparation

During the workshop, you will start creating your (first) NFT! But before that, we ask you to perform some initial steps so you can start developing straight away as the workshop starts! We will also use Byont's web3 template; this has just about everything you need to get started.

Please note that [getting enough test ETH](#3-get-some-test-eth) (around 0.3 should be good) generally takes more than one day, depending on how much you can claim per day from the faucet if you wish not also to mine it, so you should take that into account. However, we have some test ETH available for you should you need more, so don't put this as a top priority.

## 1 View files on IPFS

1. Go to [IPFS browser](https://ipfsbrowser.com/)
2. Paste the following into the input field => `bafybeiapyyq2r2jb43qdyq3tzfyiqjxlamzlaa4xm7tfty4nzb6ol5e3sq`
3. Click `Open raw file`
4. If all went well, you should now be viewing the image of a [Bored Ape NFT](https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/2369)

Alternatively, you can follow the steps [here](https://developers.cloudflare.com/web3/how-to/use-ipfs-gateway/)

If you are using Brave browser, you can paste the IPFS URL directly into the browser: `ipfs://bafybeiapyyq2r2jb43qdyq3tzfyiqjxlamzlaa4xm7tfty4nzb6ol5e3sq`

## 2. Get a test crypto wallet

For the workshop, we recommend using Metamask, a crypto wallet that you can add as a [browser extension.](https://metamask.io/)

You can use this wallet for testing during the workshop. We recommend you keep your development and personal wallet separate; in other words, we recommend you not store real funds on it.

### Wallet password

At some point, the wallet will ask you to configure a password to unlock your wallet in your browser. Your password, however, is **not** the real key to your wallet!

### Seed phrase

Metamask will generate a seed phrase for you. Please write down this seed phrase and keep it secure. If someone has access to your seed phrase, they will be able to access your wallet, all the accounts within it, and, therefore, all the funds! Consequently, it is best to get rid of this wallet after the workshop and create a new one in a more secure environment. Only use this one for testing purposes.

### Private key

Metamask holds your private key in the browser's data store. A private key is a randomly-generated number that gives a user control over all data and funds linked with the corresponding Ethereum address, which is generated from the Keccak-256 hash of the public key. This includes access to contracts that authorize the address. The private key is used to create signatures proving data or funds' ownership in a transaction. Therefore, never share your private key with anyone, as they can access your account and all the funds!

## 3. Get some test ETH

This step is recommended but optional because as you develop your NFT contract, it would also be nice to experience the deployment and interact with it on a real (test) network. Note that this will cost ETH, but don't worry - we will not be using real ETH but test ETH since we are deploying to the Goerli test network.

Ethereum has several testing networks where you can get free ETH. This ETH (unfortunately) is not transferable to the mainnet, so it is solely for development purposes. We will use the Goerli test network since, at the time of writing, [Opensea](https://opensea.io/), an NFT marketplace, currently uses that.

To check which testnets Opensea supports, or to check testnet NFT's on Opensea, go [here](https://testnets.opensea.io/).

There are generally two ways to get test ETH:

- Regular faucets
- Mining yourself using POW (proof of work) faucets

**Important: We recommend that you get at least 0.3 test ETH!** At the time of writing, the network is congested, which means transaction fees are high now. Getting this much ETH generally takes multiple days since the Goerli faucets only supply a limited amount of ETH per 24 hours.

### Regular faucet

1. Go to https://goerlifaucet.com/, and create an alchemy account. It doesn't matter what you put in there, the reason you need an alchemy account, for now, is to claim the test ETH, and it's free.

2. Open up metamask, type your password and copy and paste your wallet address into the input field. That tells the faucet, "Hey, send the funds to my address!".

3. Click "Send me ETH." In a short while, the funds should appear in your wallet. You will have to swap to the Goerli testnet in Metamask, though

4. In Metamask, click on Settings > Advanced > Show test networks. Then, click on "Goerli." Your funds should appear soon!

### POW faucet

1. Go to https://goerli-faucet.pk910.de/ (or search for Goerli POW faucet)
2. Enter your wallet address, and start mining! **Note:** You need to mine for a certain amount of time because there is a minimum claim amount. Make sure you have the minimum claim amount before you claim your funds.
3. When you've had enough, click "Stop mining and claim rewards."
4. Verify that you are a human, and your funds should appear shortly.

**Tip**: If you have the resources, you can mine faster by increasing the number of workers. You can increase this beyond what is initially shown as the max, i.e., if it says 5/5, you can still increase the max workers if your machine allows it.

## Other faucets links

We recommend (but it is optional) that you try out other faucets as well, [this site](https://faucetlink.to/goerli) has plenty of faucets you can try out. Some might be down; others might require some verification method, such as a tweet.

## 4 Clone this repo and install VSCode extensions

**Note:** We use [VSCode](https://code.visualstudio.com/) for development. There are other free-to-use tools, but we can only provide limited support if you decide to use those.
If you are using `Windows`, please refer to [this section]()
First, install [Git LFS](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage).

To check if you have Git LFS installed:

```zsh
$ git lfs install
> Git LFS initialized
```

`git clone https://github.com/Byont-Ventures/Hackathon.git`

If you open this repo in VSCode, you should get a suggestion to install a set of extensions; we recommend you do so.

## 4.5 Configuration for Windows users

If you are a windows user, we recommend using Windows Subsystem for Linux (WSL) to work with Foundry.
The support is better, and configuration is (way) more straightforward.
You can use the steps below to get started:

1. Get [Ubuntu with WSL](https://apps.microsoft.com/store/detail/ubuntu-22041-lts/9PN20MSR04DW) from the Microsoft Store
2. Install [Git LFS](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage) (Optional - if you get stuck, you can skip this step)
3. Clone this repo `git clone https://github.com/Byont-Ventures/Hackathon.git`
4. Install [nvm, node.js, and npm](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl#install-nvm-nodejs-and-npm)
5. You will have to find your solution for opening your favorite IDE in WSL + Ubuntu, for instance. We recommend VSCode because they have good [documentation.](https://code.visualstudio.com/docs/remote/wsl-tutorial) and integration solutions.

Now you should be good to go, and you can continue your installation in [section 5](#5-setting-up-your-development-environment).

## 5. Setting up your development environment

### Why NextJS (React)?

NextJS and React are simply by far the most used frameworks used in developing front-end applications in Web3. React has the largest community and a lot of different web3 frameworks available, with many solutions to any problems you might encounter.

### Why Foundry?

There are other frameworks like Hardhat and Truffle if you wish to use them. The main drawbacks here are that you will have to write your tests in Javascript, and you will have to communicate with your smart contracts using libraries. Using Foundry, you can write tests directly in Solidity. Furthermore, you can quickly implement fuzz testing and traces that will give you exact information on what happens during a function call.

### Install Foundry

Foundry is a smart contract development toolchain. Foundry manages your dependencies, compiles your project, runs tests, deploys, and lets you interact with the chain from the command line and via Solidity scripts.

To install Foundry, please refer to their excellent [documentation](https://book.getfoundry.sh/getting-started/installation) on how to get started.

**Note:** To see if you installed Foundry correctly, type `forge` in your terminal. If the command is not recognized, try it in a new one.

### Install other packages using yarn (includes NextJS)

We recommend installing the packages using the yarn package manager version `1.22.19`.

```
npm install --global yarn@1.22.19
```

Run `yarn install` and wait for the process to complete.

Then, you're all set to start building your first Web3 Dapp during the workshop!

If the following commands work for you, you won't have to do anything else!

`forge`
`anvil`
`yarn run fe:dev` (This will give you an error in the browser if you don't have anvil running simultaneously in a separate terminal, but that's ok)

If you are having any issues or if you have any questions, please don't hesitate to contact us!

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
