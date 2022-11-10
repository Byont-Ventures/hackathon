# Backend Challenges

These challenges provide a way to get started with Foundry, Solidity, and NFTs. Usually, the goal is to fix an error / write a new function in a test file, solidity file, or both. Simultaneously, the challenges will be examples of how things work in Solidity, how NFT smart contracts are structured, how to test your files, and how smart contracts are deployed.

## Challenge 1 - Hello World!

Take a look at the `smart-contracts` folder. Here, the important sub-folders are

- `scripts` => Has a file that contains the logic that is called when you run tests with `forge test` (this will run all the files)
- `src` => Contains all the actual smart contracts.
- `tests` => In here, you can write your test files.

For this challenge, there is a smart contract called `Challenge_1.sol`. This contract has a `string message` and a function `showMessage()` that returns the message. There is also a test file called `Challenge_1.t.sol` (test files should always have the extension t.sol), and it initiates the `Challenge_1.sol` contract so we can call its functions. It runs the `setUp()` function from Foundry; this is run before every test you write in the file. For more information, check out the [Foundry book](https://book.getfoundry.sh/forge/writing-tests).

Whew, we did a lot of stuff, but yet so little! Take a sip of your coffee. Breathe in, breathe out. When you're ready, go ahead and run your first test by typing `forge test --match-contract Challenge1` (--match-contract is a flag that enables you to run a specific test contract). Sit back, and enjoy the dopamine of that green checkmark.

## Challenge 2 - Hello???

First things first - to make testing easier, from now on, stuff has been commented out. Otherwise, the compiler is going to complain about incomplete functions and the like. So take a look at the test files and the contracts, and uncomment them for this challenge!

The message in the contract `Challenge_2.sol` has not been initialized yet. The goal is to give it the value 'Hello World' using a setter function! Well, the function is not built yet, but don't worry; there are some valuable hints in the contract and test files to help you build.

## Challenge 3 - Hello + World

Once again, remember to uncomment the challenge code. You can leave the previous challenge code uncommented - provided everything works.

Let's add a tiny bit of spice. This time around, the goal is to write a function that adds a string to the incomplete message. The tests are also incomplete. Eventually, you should be able to add something to the message so that it becomes 'Hello World!'. Feel free to look back to other tests or the foundry books to see how it's done.

## Challenge 4 - Solidity versions

The goal of the challenge is the same. But what's going on here? If you run the test, Foundry will complain about compiler versions. Take a look at `foundry.toml` in the root folder. In the `profile.default` section, you will see that the solidity compiler is specified to be 0.8.17 - but the contracts in this challenge require a different compiler version!

Luckily, you can tell Foundry which compiler version to use. You can even have it auto-detect the compiler versions. Go ahead and comment out the line where it says `solc = ">=0.8.17"`. Below, we have added a new line that auto-detects the compiler version. Uncomment that and save the file. Now, Foundry will auto-detect your compiler version whenever you run a test.

But there is another problem. Why does `string.concat()` not work? It may have something to do with the compiler versions used in the contracts. Take a look [here](https://ethereum.stackexchange.com/questions/729/how-to-concatenate-strings-in-solidity) on how you are allowed to concatenate strings in different solidity versions and [here](https://docs.soliditylang.org/en/v0.8.17/080-breaking-changes.html) on how different solidity versions behave in general. **You will encounter a lot of different compiler versions in the wild, and it is, therefore, good to know where to check certain behaviors.**

## Challenge 5 - NFT Contract

From here on out, we will be building the NFT contract by adding a piece of functionality in every challenge!

Generally speaking, an NFT consists of following components:

- [imports](#solidity-libraries-and-openzeppelin)
- [constructor](#constructors)
- variables/constants/mappings to keep track of things
- [tokenURI](#tokenURI)
- [mint](#mint-functions)

The goal of this challenge is to flesh out the constructor, have it accept the arguments passed in the test, and make it set the max supply inside the constructor to what was passed as an argument.

## Challenge 6 - BaseURI, TokenURI

Since `_baseURIextended` is private, we have implemented a getter function called `_baseURI()`. The ERC721 standard already has this function implementation, but we want it to behave differently for our use case so we have overridden it. Notice the `override` keyword added to the function.

In `Challenge_6.t.sol`, we want to get the token URI from the contract given a certain token ID. Your job is to:

- Implement a function `setBaseURI()` that sets the base URI given a certain string
  - The function should take a string parameter
  - The function should set \_baseUriExtended to that string
- Implement a function `tokenURI()` that constructs a token URI and returns it given a certain token ID
  - The function should take a uint parameter (this is the token ID)
  - The function should `override` the default ERC721 `tokenURI()`
  - The function should concatenate \_baseUriExtended and the passed token ID parameter
  - The function should return the token URI as a string

**HINT**: Solidity will not accept string and uint concatenation. You can use the provided Strings library to turn uint into a string.

### Solidity libraries and openzeppelin

In Solidity, you can import libraries that will make life easier. OpenZeppelin is a company that provides free standardized contract libraries to use, such as ERC721. These contracts are firmly audited, meaning they are generally secure to implement in your contracts.

ERC721 is a standard for NFT smart contracts. There are others, such as ERC1155 by Enjin and ERC721A by Azuki, each with its own set of functionalities. For the workshop, ERC721 NFTs will suffice.

- https://docs.openzeppelin.com/contracts/3.x/
- https://docs.openzeppelin.com/contracts/3.x/api/token/erc721

### Constructors

A constructor is a special function that is used to initialize state variables. An ERC721 contract, for example, requires two constructor parameters called "Name" and "Symbol," i.e., "Ethereum" and "ETH." Also, in this case, we set our max allowed supply of NFTs via the constructor.

When you deploy a smart contract, you will pass these arguments to the constructor.

### TokenURI

If you are familiar with [Opensea](https://opensea.io/), you might be wondering: how on earth do they get the NFT images and metadata? Well, often times these images are stored on chain, on IPFS, or even in the cloud. As on-chain storage is expensive, images are more often than not stored off-chain.

Your smart contract provides a way to tell Opensea which image belongs to which NFT and where the files are stored through a function called `tokenURI()`. Opensea simply looks for this function in your smart contract and parses the return value.

### Mint Functions

Minting is the core of getting tokens out there on the blockchain. NFTs are Non-Fungible Tokens, and they have to be minted. In the past, these functions required a lot of [gas](https://cryptomarketpool.com/gas-in-solidity-smart-contracts), but more and more standards are being developed to make minting cost less ETH, such as ERC721A.

As you might have noticed, NFTs have a token id. Most of the time, when you deploy a fresh collection, the token ID starts at 0 or 1. Then, every time an NFT is minted, the token id increases and is assigned to the minted NFT.

### IPFS, Opensea, and Metadata

Previously, as a test, we pasted an IPFS link to an NFT image of a Bored Ape into our browser. We know that IPFS is used for decentralized storage and that we can store metadata and images on IPFS. Then, we can construct the IPFS token URIs in our smart contracts. When Opensea looks at your NFT smart contract, it will retrieve the data using `tokenUri()`. Usually, the first thing returned is the metadata.

For example, paste this link into your browser: `ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/2369`

You will see a JSON object with some values. This is the NFT metadata. It contains:

- image => the IPFS URI to the actual NFT image
- attributes => array containing a list of objects with key-value pairs corresponding to the trait type and the values.

Feel free to compare it to the [metadata displayed on Opensea](https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/2369).

For more information on how to structure your metadata, check out the [Opensea metadata standards](https://docs.opensea.io/docs/metadata-standards).

### Etherscan

So how did we get the metadata link? We could, just like Opensea, call the `tokenURI()` function on the contract. But then, how do we know the contract address of an NFT? There are multiple ways to go about this. Let's try to get the contract address of [Bored Ape Yacht Club](https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/2369) first. There are two ways to get the contract address:

- Through the URL => `opensea.io/ethereum/contractAddress/tokenId`
- Through "Details" => Dropdown on the left side, below the metadata and "About Bored Ape Yacht Club" sections.

Let's click on the [contract address](https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d).

We have landed on a website with a lot of data. Welcome to Etherscan. Etherscan is a block explorer for the Ethereum blockchain. It allows users to search and browse transactions and blocks easily. It also provides information about each transaction and block, such as the hash and timestamp.

The average person doesn't have the time to read through an entire blockchain to find out what's going on.
A block explorer solves this problem by making it easy for people to search and browse the blockchain. They can see all the transactions that have taken place and how much crypto is owned by specific wallet addresses.

Additionally, most explorers will display the addresses of both the sender and receiver and the amount of “gas” used in each transaction. Gas is simply the amount of ETH used to pay for a transaction.

You can think of Etherscan as the Google of Ethereum. Just as you would use Google to search the internet, you can use Etherscan to search the Ethereum blockchain.

If you paste a contract address in the top right search bar, you will land on the smart contract page, and you will be able to see all kinds of data and even interact with the smart contract by connecting your wallet. So don't be fooled if your front enders create some "security" measures that would prevent people from minting NFTs on the front end. When there is a will, there is a way. Either by using their own contracts or by simply going to Etherscan.

Now, go ahead and click on the "Contract" tab. Below that, you will see three tabs called "Code," "Read Contract," and "Write Contract."

- Code => All the smart contract code. Here, you can also get an idea of how NFTs were made back in the day.
- Read Contract => Interact with all the read-only functions of the smart contract, for example, `tokenUri()`.
- Write Contract => Interact with all the write functions of the smart contract (Requires wallet connection), for example, minting.
