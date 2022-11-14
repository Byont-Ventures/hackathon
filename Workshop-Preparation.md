# Workshop preparation

During the workshop, you will start creating your (first) NFT! But before that, we ask you to perform some initial steps so you can start developing straight away as the workshop starts! We will also use Byont's web3 template; this has just about everything you need to get started.

## 1. Install Brave Browser

[Brave Browser](https://brave.com/) is a privacy-focused browser, but the main reason we are using this is that it is the easiest way to view files on [IPFS](https://docs.ipfs.tech/concepts/what-is-ipfs/).

A small test:

1. Open up Brave Browser
2. Paste the following link => `ipfs://bafybeiapyyq2r2jb43qdyq3tzfyiqjxlamzlaa4xm7tfty4nzb6ol5e3sq`
3. Choose "gateway" (not "local node")
4. If all went well, you should now be viewing the image of a [Bored Ape NFT](https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/2369)

## 2. Get a test crypto wallet

For the workshop, we recommend using Metamask, a crypto wallet that can you can add as a [browser extension.](https://metamask.io/)

You can use this wallet for testing during the workshop. We recommend you keep your development and personal wallet separate; in other words, we recommend you not store real funds on it.

### Wallet password

At some point, the wallet will ask you to configure a password to unlock your wallet in your browser. Your password, however, is **not** the real key to your wallet!

### Seed phrase

Metamask will generate a seed phrase for you. Please write down this seed phrase and keep it secure. If someone has access to your seed phrase, they will be able to access your wallet, all the accounts within it, and, therefore, all the funds! Consequently, it is best to get rid of this wallet after the workshop and create a new one in a more secure environment. Only use this one for testing purposes.

### Private key

Metamask holds your private key in the browser's data store. A private key is a randomly-generated number that gives a user control over all data and funds linked with the corresponding Ethereum address, which is generated from the Keccak-256 hash of the public key. This includes access to contracts that authorize the address. The private key is used to create signatures proving data or funds' ownership in a transaction. Therefore, never share your private key with anyone, as they will be able to access your account and all the funds!

## 3. Get some test ETH

This step is recommended but optional because as you develop your NFT contract, it would also be nice to experience the deployment and interact with it on a real (test) network.

Ethereum has several testing networks where you can get free ETH. This ETH (unfortunately) is not transferable to the mainnet, so it is solely for development purposes. We will use the Goerli test network since, at the time of writing, [Opensea](https://opensea.io/), an NFT marketplace, currently uses that.

To check which testnets Opensea supports, or to check testnet NFT's on Opensea, go [here](https://testnets.opensea.io/).

There are generally two ways to get test ETH:

- Regular faucets
- Mining yourself using POW (proof of work) faucets

**Important: We recommend that you get at least 0.3 test ETH!** The network is congested, which means transaction fees are high now.

### Regular faucet

1. Go to https://goerlifaucet.com/, and create an alchemy account. It doesn't matter what you put in there, the reason you need an alchemy account, for now, is to claim the test ETH, and it's free.

2. Open up metamask, type your password and copy and paste your wallet address into the input field. That tells the faucet, "Hey, send the funds to my address!".

3. Click "Send me ETH." In a short while, the funds should appear in your wallet. You will have to swap to the Goerli testnet in Metamask, though

4. In Metamask, click on Settings > Advanced > Show test networks. Then, click on "Goerli." Your funds should appear soon!

### POW faucet

1. Go to https://goerli-faucet.pk910.de/ (or search for Goerli POW faucet)
2. Enter your wallet address, and start mining! **Note:** You need to mine for a certain amount of time because there is a minimum claim amount. Make sure you have the minimum claim amount before you claim your funds.
3. When you've had enough, click "Stop mining and claim rewards."
4. Verify that you are a human, and then your funds should appear shortly.

**Tip**: If you have the resources, you can mine faster by increasing the number of workers. You can increase this beyond what is initially shown as the max, i.e., if it says 5/5, you can still increase the max workers if your machine allows it.

## Other faucets links

We recommend (but it is optional) that you try out other faucets as well, [this site](https://faucetlink.to/goerli) has plenty of faucets you can try out. Some might be down; others might require some verification method, such as a tweet.

## 4. Clone this repo and install VSCode extensions

`git clone https://github.com/Byont-Ventures/rtl-talpa-template`

**Note:** We use [VSCode](https://code.visualstudio.com/) for development. There are other free-to-use tools, but we can only provide limited support if you decide to use those.

If you open this repo in VSCode, you should get a suggestion to install a set of extensions; we recommend you do so.

## 5. Setting up your development environment

### Why NextJS (React)?

NextJS and React are simply by far the most used frameworks used in developing front-end applications in Web3. React has the largest community and a lot of different web3 frameworks available, with many solutions to any problems you might encounter.

### Why Foundry?

There are other frameworks like Hardhat and Truffle if you wish to use them. The main drawbacks here are that you will have to write your tests in Javascript, and you will have to communicate with your smart contracts using libraries. Using Foundry, you can write tests directly in Solidity. Furthermore, you can easily implement fuzz testing and traces that will give you exact information on what happens during a function call.

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
